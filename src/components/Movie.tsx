import { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks/useActions';
import { useGetTopMovieQuery } from '../RTK Query/movieAPI';

import Cards from './Cards';
import Modal from './Modal';
import MovieDetails from './MovieDetails';
import LoadingCards from './LoadingCards';

// import { fetchTopMovie, fetchSeachMovie } from '../api/movieAPI';

import { Card, Status, IMovies, Error } from '../types';

function Movies({ errorMessage }: IMovies) {
  const currentSearch = useAppSelector((state) => state.search.search);
  const { data, isLoading, isError, error } = useGetTopMovieQuery(currentSearch);
  const topMovies = data?.results;

  const [movies, setMovies] = useState<Card[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [movieID, setMovieID] = useState(0);
  const [status, setStatus] = useState<Status>(Status.IDLE);

  // console.log('isLoading', isLoading);
  // console.log('data', data);
  // console.log('isError', isError);
  // console.log('error', (error as Error)?.data);

  useEffect(() => {
    setStatus(Status.PENDING);

    if (isError) {
      const errorServerMessage = (error as Error)?.data.status_message;

      errorMessage(errorServerMessage);
      setStatus(Status.REJECTED);
    }

    if (!currentSearch) {
      setMovies(topMovies);
      setStatus(Status.RESOLVED);

      return;
    }
  }, [currentSearch, topMovies, isError, errorMessage, error]);

  // useEffect(() => {
  //   setStatus(Status.PENDING);

  //   if (currentSearch === '') {
  //     fetchTopMovie()
  //       .then((data) => data.json())
  //       .then((data) => {
  //         setMovies(data.results);
  //         setStatus(Status.RESOLVED);
  //       })
  //       .catch((err) => {
  //         errorMessage(err.message);
  //         setStatus(Status.REJECTED);
  //       });
  //     return;
  //   }

  //   fetchSeachMovie(currentSearch)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       if (data.results.length === 0) {
  //         setStatus(Status.REJECTED);
  //         errorMessage(`"${currentSearch}" is not found`);
  //       } else {
  //         setStatus(Status.RESOLVED);
  //       }
  //       setMovies(data.results);
  //     })
  //     .catch((err) => {
  //       errorMessage(err.message);
  //       setStatus(Status.REJECTED);
  //     });
  // }, [errorMessage, currentSearch]);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (id: number) => {
    setShowModal(true);
    setMovieID(id);
  };

  return (
    <>
      {status === Status.PENDING && <LoadingCards />}
      {status === Status.IDLE && <Cards cards={movies} currentCardID={openModal} />}
      {status === Status.RESOLVED && (
        <>
          <Cards cards={movies} currentCardID={openModal} />
          {showModal && (
            <Modal onClose={closeModal}>
              <MovieDetails movieID={movieID} onClose={closeModal} />
            </Modal>
          )}
        </>
      )}
    </>
  );
}

export default Movies;
