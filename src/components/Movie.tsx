import { useEffect, useState } from 'react';

import Heading from '../components/Heading';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import Modal from '../components/Modal';
import MovieDetails from '../components/MovieDetails';

import { fetchTopMovie, fetchSeachMovie } from '../api/movieAPI';

import { Card, Status } from '../types';

function Movies() {
  const [movies, setMovies] = useState<Card[]>([]);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('query') ?? '');
  const [showModal, setShowModal] = useState(false);
  const [movieID, setMovieID] = useState(0);
  const [error, setError] = useState('');
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
          setError(err.message);
          setStatus(Status.REJECTED);
        });
      return;
    }

    fetchSeachMovie(searchQuery)
      .then((data) => {
        setMovies(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch((err) => {
        setError(err.message);
        setStatus(Status.REJECTED);
      });
  }, [searchQuery]);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (id: number) => {
    setShowModal(true);
    setMovieID(id);
  };

  if (status === Status.PENDING) {
  }
  if (status === Status.RESOLVED) {
  }

  return (
    <>
      <Heading>Home Page</Heading>
      <SearchBar changeQuery={setSearchQuery} />
      <Cards cards={movies} currentCardID={openModal} />
      {showModal && (
        <Modal onClose={closeModal}>
          <MovieDetails movieID={movieID} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default Movies;
