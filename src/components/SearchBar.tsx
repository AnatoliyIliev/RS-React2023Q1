import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useActions';
import { searchQuery } from '../RTK/searchSlice';

import styles from '../styles/SearchBar.module.scss';

import { PropsHome } from '../types';

function SearchBar({ errorMessage }: PropsHome) {
  const currentSearch = useAppSelector((state) => state.search.search);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState(currentSearch);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    errorMessage('');

    if (search.trim() === '') {
      errorMessage('Enter something to search');

      return;
    }

    dispatch(searchQuery(search));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.currentTarget.value;

    setSearch(search);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <input
          className={styles.SearchForm_input}
          type="text"
          value={search}
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
