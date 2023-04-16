import { render, screen } from '@testing-library/react';
import FormsPage from '../pages/FormsPage';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

describe('FormsPage', () => {
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

  it('should render all form fields and a submit button', () => {
    render(
      <Provider store={store}>
        <FormsPage />
      </Provider>
    );

    expect(screen.getByText('Name:*')).toBeInTheDocument();
    expect(screen.getByText('Phone Number:*')).toBeInTheDocument();
    expect(screen.getByText('Gender:*')).toBeInTheDocument();
    expect(screen.getByText('Birth Date:*')).toBeInTheDocument();
    expect(screen.getByText('Pick your favorite genre:*')).toBeInTheDocument();
    expect(screen.getByText('Avatar:*')).toBeInTheDocument();
    expect(screen.getByText('I consent to my personal data*')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});
