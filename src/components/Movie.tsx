import { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks/useActions';
import { useGetTopMovieQuery, useGetSearchMovieQuery } from '../RTK_Query/movieAPI';

import Cards from './Cards';
import Modal from './Modal';
import MovieDetails from './MovieDetails';
import LoadingCards from './LoadingCards';

import { Card, Status, IMovies, Error } from '../types';

function Movies({ errorMessage }: IMovies) {
  const [showModal, setShowModal] = useState(false);
  const [movieID, setMovieID] = useState(0);
  const [status, setStatus] = useState<Status>(Status.IDLE);

  const currentSearch = useAppSelector((state) => state.search.search);

  const GetTopMovie = useGetTopMovieQuery('');
  const GetSearchMovie = useGetSearchMovieQuery(currentSearch);

  const topMovies = GetTopMovie.data?.results;
  const SearchMovie = GetSearchMovie.data?.results;

  const [movies, setMovies] = useState<Card[]>([]);

  useEffect(() => {
    setStatus(Status.PENDING);

    if (GetTopMovie.error || GetSearchMovie.error) {
      const TopMovieErrorMessage = (GetTopMovie.error as Error)?.data.status_message;
      const SearchMovieErrorMessage = (GetSearchMovie.error as Error)?.data.status_message;

      const error = TopMovieErrorMessage ?? SearchMovieErrorMessage;
      errorMessage(error);
      setStatus(Status.REJECTED);
    }

    if (!currentSearch) {
      setMovies(topMovies);
      setStatus(Status.RESOLVED);

      return;
    }

    setMovies(SearchMovie);
    setStatus(Status.RESOLVED);
  }, [
    GetSearchMovie.error,
    GetTopMovie.error,
    SearchMovie,
    currentSearch,
    errorMessage,
    topMovies,
  ]);

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
