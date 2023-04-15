import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CardForm } from '../types';

type Card = {
  cardForm: CardForm[];
};

const initialState: Card = { cardForm: [] };

export const movieSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCards: (state, action: PayloadAction<CardForm>) => {
      state.cardForm.push(action.payload);
    },
  },
});

export const { addCards } = movieSlice.actions;

export default movieSlice.reducer;
