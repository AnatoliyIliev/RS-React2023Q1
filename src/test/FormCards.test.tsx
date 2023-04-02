import { render } from '@testing-library/react';
import FormCards from '../components/FormCards';
import { CardForm } from '../types';

describe('FormCard', () => {
  it('renders form data correctly', () => {
    const cards: CardForm[] = [
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
    ];

    const { getByText } = render(<FormCards formCards={cards} />);

    expect(getByText('Name: Alex')).toBeInTheDocument();
    expect(getByText('Phone Number: 1234567890')).toBeInTheDocument();
    expect(getByText('Birth Date: 01/01/1990')).toBeInTheDocument();
    expect(getByText('Gender: Male')).toBeInTheDocument();
    expect(getByText('My favorite genre: Action')).toBeInTheDocument();
    expect(getByText('I consent to my personal data: Yes')).toBeInTheDocument();

    expect(getByText('Name: Dima')).toBeInTheDocument();
    expect(getByText('Phone Number: 9876543210')).toBeInTheDocument();
    expect(getByText('Birth Date: 02/02/1995')).toBeInTheDocument();
    expect(getByText('Gender: Female')).toBeInTheDocument();
    expect(getByText('My favorite genre: Comedy')).toBeInTheDocument();
    expect(getByText('I consent to my personal data: No')).toBeInTheDocument();
  });
});
