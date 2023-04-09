import { useEffect, useRef, useState } from 'react';

import styles from '../styles/SearchBar.module.scss';

import { PropsHome } from '../types';

function SearchBar({ changeQuery, errorMessage }: PropsHome) {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('query') ?? '');

  const currentQuery = useRef<string>('');

  useEffect(() => {
    currentQuery.current = searchQuery;
  }, [searchQuery]);

  useEffect(() => {
    return () => {
      localStorage.setItem('query', currentQuery.current);
      changeQuery(currentQuery.current);
    };
  }, [changeQuery]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    errorMessage('');

    if (searchQuery.trim() === '') {
      errorMessage('Enter something to search');

      return;
    }

    changeQuery(searchQuery);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = event.currentTarget.value;

    setSearchQuery(currentSearch);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <input
          className={styles.SearchForm_input}
          type="text"
          value={searchQuery}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder={'Search'}
        />
        <button type="submit" className={styles.SearchForm_button}>
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
