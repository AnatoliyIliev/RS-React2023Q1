import { Component } from 'react';

import styles from '../styles/SearchBar.module.scss';

class SearchBar extends Component {
  state = {
    searchQuery: '',
    err: false,
  };

  componentDidMount() {
    const query = localStorage.getItem('query');
    const parseQuery = JSON.parse(query!);

    if (parseQuery) {
      this.setState({ searchQuery: parseQuery });
    }
  }

  componentWillUnmount() {
    const { searchQuery } = this.state;

    localStorage.setItem('query', JSON.stringify(searchQuery));
  }

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { searchQuery } = this.state;

    this.setState({ err: false });

    if (searchQuery.trim() === '') {
      this.setState({ err: true });
      return;
    }

    this.setState({ searchQuery: '' });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = event.currentTarget.value.toLowerCase();
    this.setState({ searchQuery: currentSearch });
  };

  render() {
    const { searchQuery, err } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <input
            className={styles.SearchForm_input}
            type="text"
            value={searchQuery}
            onChange={this.handleChange}
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
}

export default SearchBar;
