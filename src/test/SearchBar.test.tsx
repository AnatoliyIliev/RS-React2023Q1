import { render, fireEvent } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  const changeQuery = vi.fn();
  const errorMessage = vi.fn();

  it('render SearchBar component', () => {
    const { getByRole, getByPlaceholderText } = render(
      <SearchBar changeQuery={changeQuery} errorMessage={errorMessage} />
    );
    const searchInput = getByPlaceholderText('Search');
    const searchButton = getByRole('button', { name: 'Search' });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('update the searchQuery state', () => {
    const { getByRole } = render(
      <SearchBar changeQuery={changeQuery} errorMessage={errorMessage} />
    );
    const searchInput = getByRole('textbox');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput).toHaveValue('test');
  });
});
