import { useEffect, useState } from 'react';

import Heading from '../components/Heading';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import Modal from '../components/Modal';

import { fetchTopMovie, fetchSeachMovie } from '../api/movieAPI';

// import initialCards from '../initialCards.json';

import { Card } from '../types/index';

function HomePage() {
  const [movie, setMovie] = useState<Card[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      fetchTopMovie().then((data) => {
        setMovie(data.results);
      });

      return;
    }

    fetchSeachMovie(searchQuery)
      .then((data) => {
        setMovie(data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [searchQuery]);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <Heading>Home Page</Heading>
      <SearchBar changeQuery={(e) => setSearchQuery(e)} />
      <Cards cards={movie} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tenetur inventore
            sunt fuga, quo qui quae illo nisi, necessitatibus nemo consectetur suscipit doloremque
            aspernatur delectus amet deleniti deserunt dicta nesciunt.
          </div>
        </Modal>
      )}
    </>
  );
}

export default HomePage;
