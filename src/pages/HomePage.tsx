import { useEffect, useState } from 'react';

import Heading from '../components/Heading';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

import { fetchTopMovie, fetchSeachMovie } from '../api/movieAPI';

// import initialCards from '../initialCards.json';

import { Card } from '../types/index';

function HomePage() {
  const [movie, setMovie] = useState<Card[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!(searchQuery === '')) {
      fetchSeachMovie(searchQuery)
        .then((data) => {
          setMovie(data.results);
        })
        .catch();

      return;
    }
    fetchTopMovie().then((data) => {
      setMovie(data.results);
    });
  }, [searchQuery]);

  return (
    <>
      <Heading>Home Page</Heading>
      <SearchBar changeQuery={(e) => setSearchQuery(e)} />
      <Cards cards={movie} />
    </>
  );
}

export default HomePage;
