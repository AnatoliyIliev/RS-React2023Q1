import { useState } from 'react';

import Heading from '../components/Heading';
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';

import styles from '../styles/HomePage.module.scss';

function HomePage() {
  const [error, setError] = useState('');

  return (
    <>
      <Heading>Home Page</Heading>
      <SearchBar errorMessage={setError} />
      <div className={styles.Error}>{error && <span>{error}</span>}</div>
      <Movie errorMessage={setError} />
    </>
  );
}

export default HomePage;
