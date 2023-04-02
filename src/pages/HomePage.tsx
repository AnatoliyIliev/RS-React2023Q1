import Heading from '../components/Heading';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

import initialCards from '../initialCards.json';

function HomePage() {
  return (
    <>
      <Heading>Home Page</Heading>
      <SearchBar />
      <Cards cards={initialCards} />
    </>
  );
}

export default HomePage;
