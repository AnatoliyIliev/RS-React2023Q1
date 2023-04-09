import { useEffect, useState } from 'react';

import Cards from './Cards';
import Modal from './Modal';
import MovieDetails from './MovieDetails';
import LoadingCards from './LoadingCards';

import { fetchTopMovie, fetchSeachMovie } from '../api/movieAPI';

import { Card, Status, IMovies } from '../types';

function Movies({ searchQuery, errorMessage }: IMovies) {
  const [movies, setMovies] = useState<Card[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [movieID, setMovieID] = useState(0);
  const [status, setStatus] = useState<Status>(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    if (!searchQuery) {
      fetchTopMovie()
        .then((data) => {
          setMovies(data.results);
          setStatus(Status.RESOLVED);
        })
        .catch((err) => {
          errorMessage(err.message);
          setStatus(Status.REJECTED);
        });
      return;
    }

    fetchSeachMovie(searchQuery)
      .then((data) => {
        if (data.results.length === 0) {
          setStatus(Status.REJECTED);
          errorMessage(`"${searchQuery}" is not found`);
        } else {
          setStatus(Status.RESOLVED);
        }
        setMovies(data.results);
      })
      .catch((err) => {
        errorMessage(err.message);
        setStatus(Status.REJECTED);
      });
  }, [errorMessage, searchQuery]);

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
