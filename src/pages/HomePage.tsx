import { Component } from 'react';
import Heading from '../components/Heading';
import SearchBar from '../components/SearchBar';

class HomePage extends Component {
  state = {
    currentQuery: '',
  };

  componentDidMount() {
    const query = localStorage.getItem('query');
    const parseQuery = JSON.parse(query!);
    if (parseQuery) {
      this.setState({ currentQuery: parseQuery });
    }
  }

  componentWillUnmount() {
    const { currentQuery } = this.state;
    localStorage.setItem('query', JSON.stringify(currentQuery));
  }

  submitProps = (searchQuery: string) => {
    this.setState({ currentQuery: searchQuery });
  };

  render() {
    const { currentQuery } = this.state;

    return (
      <>
        <Heading>Home Page</Heading>
        <SearchBar submitProps={this.submitProps} currentQuery={currentQuery} />
      </>
    );
  }
}

export default HomePage;
