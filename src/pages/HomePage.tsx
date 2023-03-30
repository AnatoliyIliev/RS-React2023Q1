import { Component } from 'react';

import Heading from '../components/Heading';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

import initialCards from '../initialCards.json';

class HomePage extends Component {
  state = {
    cards: initialCards,
  };

  render() {
    const { cards } = this.state;

    return (
      <>
        <Heading>Home Page</Heading>
        <SearchBar />
        <Cards cards={cards} />
      </>
    );
  }
}

export default HomePage;
