import { screen, render, fireEvent } from '@testing-library/react';
import { describe, expect } from 'vitest';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('render SearchBar component', () => {
    const { getByRole, getByPlaceholderText } = render(<SearchBar />);
    const searchInput = getByPlaceholderText('Search');
    const searchButton = getByRole('button', { name: 'Search' });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('submits search query on form submit', () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText('Search');
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(searchButton);

    expect(searchInput).toHaveValue('');
  });

  it('update the searchQuery state', () => {
    const { getByRole } = render(<SearchBar />);
    const searchInput = getByRole('textbox');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput).toHaveValue('test');
  });

  it('displays error message if search query is empty', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText('Search');
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, { target: { value: '' } });
    fireEvent.click(searchButton);

    expect(screen.getByText(/enter something to search./i)).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: ' ' } });
    fireEvent.click(searchButton);

    expect(screen.getByText(/enter something to search./i)).toBeInTheDocument();
  });
});
