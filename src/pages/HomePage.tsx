import { useState } from 'react';

import Heading from '../components/Heading';
import Movies from '../components/Movie';
import SearchBar from '../components/SearchBar';

import styles from '../styles/HomePage.module.scss';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('query') ?? '');
  const [error, setError] = useState('');

  return (
    <>
      <Heading>Home Page</Heading>
      <SearchBar changeQuery={setSearchQuery} errorMessage={setError} />
      <div className={styles.Error}>{error && <span>{error}</span>}</div>
      <Movies searchQuery={searchQuery} errorMessage={setError} />
    </>
  );
}

export default HomePage;
