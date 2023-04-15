import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CardForm } from '../types';

const initialState: CardForm[] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action: PayloadAction<CardForm>) => {
      state.push(action.payload);
    },
  },
});

export const { addForm } = formSlice.actions;

export default formSlice.reducer;
