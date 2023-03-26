import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('render and a submit button', () => {
    const { getByRole } = render(<SearchBar />);
    const searchInput = getByRole('textbox');
    const searchButton = getByRole('button', { name: 'Search' });
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('update the searchQuery state', () => {
    const { getByRole } = render(<SearchBar />);
    const searchInput = getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput).toHaveValue('test');
  });
});
