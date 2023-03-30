import { useEffect, useState } from 'react';

import styles from '../styles/SearchBar.module.scss';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('query') ?? '');

  const [err, setErr] = useState(false);

  useEffect(() => {
    localStorage.setItem('query', searchQuery);
  }, [searchQuery]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setErr(false);

    if (searchQuery.trim() === '') {
      setErr(true);

      return;
    }
    setSearchQuery('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = event.currentTarget.value.toLowerCase();

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
      {err && <div style={{ color: 'red', textAlign: 'center' }}>Enter something to search.</div>}
    </>
  );
}

export default SearchBar;
