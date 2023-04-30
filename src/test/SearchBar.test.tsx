import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import SearchBar from '../components/SearchBar';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  search: {
    search: '',
  },
};

describe('SearchBar', () => {
  const errorMessage = vi.fn();

  const reducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  it('render SearchBar component', () => {
    render(
      <Provider store={store}>
        <SearchBar errorMessage={errorMessage} />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('update the searchQuery', () => {
    render(
      <Provider store={store}>
        <SearchBar errorMessage={errorMessage} />
      </Provider>
    );

    const searchInput = screen.getByRole('textbox');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput).toHaveValue('test');
  });

  it('should show error message if search input is empty', () => {
    render(
      <Provider store={store}>
        <SearchBar errorMessage={errorMessage} />
      </Provider>
    );

    const searchForm = screen.getByRole('textbox');
    fireEvent.submit(searchForm);

    expect(errorMessage).toHaveBeenCalledWith('Enter something to search');
  });
});
