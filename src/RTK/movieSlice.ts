import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Card, MovieDetailsCard, CardForm } from '../types';

type Movies = {
  movies: Card[];
  movieDetails: MovieDetailsCard[];
  cardForm: CardForm[];
};

const initialState: Movies = { movies: [], movieDetails: [], cardForm: [] };

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    movies: (state, action) => {
      state;
    },
  },
});

export const { movies } = movieSlice.actions;

export default movieSlice.reducer;
