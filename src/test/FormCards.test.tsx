import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import FormCards from '../components/FormCards';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

describe('FormCard', () => {
  const initialState = {
    form: [
      {
        id: 1,
        name: 'Alex',
        phone: 1234567890,
        date: '01/01/1990',
        gender: 'Male',
        genre: 'Action',
        file: 'https://example.com/avatar.jpg',
        agree: true,
      },
      {
        id: 2,
        name: 'Dima',
        phone: 9876543210,
        date: '02/02/1995',
        gender: 'Female',
        genre: 'Comedy',
        file: 'https://example.com/avatar2.jpg',
        agree: false,
      },
    ],
  };

  const reducer = (state = initialState, action: { type: unknown }) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  it('renders form data correctly', () => {
    render(
      <Provider store={store}>
        <FormCards />
      </Provider>
    );

    expect(screen.getByText('Name: Alex')).toBeInTheDocument();
    expect(screen.getByText('Phone Number: 1234567890')).toBeInTheDocument();
    expect(screen.getByText('Birth Date: 01/01/1990')).toBeInTheDocument();
    expect(screen.getByText('Gender: Male')).toBeInTheDocument();
    expect(screen.getByText('My favorite genre: Action')).toBeInTheDocument();
    expect(screen.getByText('I consent to my personal data: Yes')).toBeInTheDocument();

    expect(screen.getByText('Name: Dima')).toBeInTheDocument();
    expect(screen.getByText('Phone Number: 9876543210')).toBeInTheDocument();
    expect(screen.getByText('Birth Date: 02/02/1995')).toBeInTheDocument();
    expect(screen.getByText('Gender: Female')).toBeInTheDocument();
    expect(screen.getByText('My favorite genre: Comedy')).toBeInTheDocument();
    expect(screen.getByText('I consent to my personal data: No')).toBeInTheDocument();
  });
});
