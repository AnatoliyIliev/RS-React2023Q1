import { useEffect, useRef, useState } from 'react';

import styles from '../styles/SearchBar.module.scss';

import { PropsHome } from '../types';

function SearchBar({ changeQuery }: PropsHome) {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('query') ?? '');
  const [err, setErr] = useState('');

  const currentQuerry = useRef<string>('');

  useEffect(() => {
    currentQuerry.current = searchQuery;
  }, [searchQuery]);

  useEffect(() => {
    return () => {
      localStorage.setItem('query', currentQuerry.current);
    };
  }, []);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setErr('');

    if (searchQuery.trim() === '') {
      setErr('Enter something to search');

      return;
    }

    changeQuery(searchQuery);
    setSearchQuery('');
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
      <div className={styles.SearchForm_error}>
        {err && <span style={{ color: 'red', textAlign: 'center' }}>{err}</span>}
      </div>
    </>
  );
}

export default SearchBar;
