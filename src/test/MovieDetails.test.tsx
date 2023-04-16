import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import MovieDetails from '../components/MovieDetails';

vi.mock('../RTK_Query/movieAPI', () => ({
  useGetMovieByIDQuery: (movieID: number) => ({
    data: {
      id: movieID,
      title: 'The Lord of the Rings',
      poster_path: '/lotr_poster.jpg',
      production_companies: [
        {
          id: 1,
          name: 'New Line Cinema',
          logo_path: '/new_line_cinema_logo.jpg',
        },
        {
          id: 2,
          name: 'WingNut Films',
          logo_path: '/wingnut_films_logo.jpg',
        },
      ],
      tagline: 'One ring to rule them all',
      status: 'Released',
      release_date: '2001-12-19',
      belongs_to_collection: {
        name: 'The Lord of the Rings Collection',
      },
      genres: [
        {
          name: 'Action',
        },
        {
          name: 'Adventure',
        },
        {
          name: 'Fantasy',
        },
      ],
      vote_average: 8.9,
      vote_count: 18267,
      popularity: 32.58,
      homepage: 'https://www.lordoftherings.net/',
      original_language: 'en',
      runtime: 178,
      budget: 93000000,
      revenue: 871368364,
      spoken_languages: [
        {
          english_name: 'English',
          name: 'English',
        },
      ],
      production_countries: [
        {
          name: 'New Zealand',
        },
        {
          name: 'United States of America',
        },
      ],
      overview: 'In a world of magic and monsters...',
    },
    isLoading: false,
  }),
}));

describe('MovieDetails', () => {
  it('should render movie details when data is loaded', async () => {
    const { getByText, getByAltText } = render(<MovieDetails movieID={1} onClose={() => {}} />);

    await waitFor(() => getByText('The Lord of the Rings'));
    expect(getByText('The Lord of the Rings')).toBeInTheDocument();
    expect(getByAltText('New Line Cinema')).toBeInTheDocument();
    expect(getByAltText('WingNut Films')).toBeInTheDocument();
    expect(getByText('Status: Released')).toBeInTheDocument();
  });
});
