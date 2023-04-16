import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Cards from '../components/Cards';
import initialCards from '../initialCards.json';

describe('Cards', () => {
  const currentCardID = vi.fn();
  const cards = [
    {
      adult: false,
      backdrop_path: 'test.jpg',
      id: 1,
      title: 'Cocaine Bear',
      original_language: 'en',
      original_title: 'Cocaine Bear',
      overview: 'This is a test card',
      poster_path: 'test.jpg',
      media_type: 'movie',
      genre_ids: [53, 35],
      popularity: 258.402,
      release_date: '2023-02-22',
      video: false,
      vote_average: 7,
      vote_count: 115,
    },
  ];

  it('renders a card', () => {
    const { getByText, getByAltText } = render(
      <Cards cards={cards} currentCardID={currentCardID} />
    );
    expect(getByText('Cocaine Bear')).toBeInTheDocument();
    expect(getByText('22.02.2023')).toBeInTheDocument();
    expect(getByText('7')).toBeInTheDocument();
    expect(getByAltText('Cocaine Bear')).toBeInTheDocument();
  });

  it('renders all cards', () => {
    const { container } = render(<Cards cards={initialCards} currentCardID={currentCardID} />);
    expect(container.getElementsByClassName('_cards_item_666487').length).toBe(20);
  });
});
