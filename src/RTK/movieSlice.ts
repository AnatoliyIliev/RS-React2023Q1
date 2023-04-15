import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Card } from '../types';

const initialState: Card[] = [];

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    movies: (state, action: PayloadAction<Card>) => {
      state = [action.payload];
    },
  },
});

export const { movies } = movieSlice.actions;

export default movieSlice.reducer;
