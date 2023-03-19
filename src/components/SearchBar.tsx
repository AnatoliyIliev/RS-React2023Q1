import { Component } from 'react';

import styles from '../styles/SearchBar.module.scss';
import { PropSeach, StateSeach } from '../types';

class SearchBar extends Component<PropSeach, StateSeach> {
  state = {
    searchQuery: '',
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { searchQuery } = this.state;
    const { submitProps } = this.props;

    if (searchQuery.trim() === '') {
      alert('Enter something to search.');
      return;
    }

    submitProps(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = event.currentTarget.value.toLowerCase();
    this.setState({ searchQuery: currentSearch });
  };

  render() {
    const { searchQuery } = this.state;
    const { currentQuery } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
        <input
          className={styles.SearchForm_input}
          type="text"
          value={searchQuery}
          onChange={this.handleChange}
          autoComplete="off"
          autoFocus
          placeholder={currentQuery || 'Search'}
        />
        <button type="submit" className={styles.SearchForm_button}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
