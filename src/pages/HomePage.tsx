import { useEffect, useState } from 'react';

import Heading from '../components/Heading';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import Modal from '../components/Modal';
import MovieDetails from '../components/MovieDetails';

import { fetchTopMovie, fetchSeachMovie } from '../api/movieAPI';

import { Card } from '../types/index';

function HomePage() {
  const [movies, setMovies] = useState<Card[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [movieID, setMovieID] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTopMovie().then((data) => {
      setMovies(data.results);
    });
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchSeachMovie(searchQuery)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [searchQuery]);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (id: number) => {
    setShowModal(true);
    setMovieID(id);
  };

  return (
    <>
      <Heading>Home Page</Heading>
      <SearchBar changeQuery={(e) => setSearchQuery(e)} />
      <Cards cards={movies} currentCardID={openModal} />
      {showModal && (
        <Modal onClose={closeModal}>
          <MovieDetails movieID={movieID} />
        </Modal>
      )}
    </>
  );
}

export default HomePage;
