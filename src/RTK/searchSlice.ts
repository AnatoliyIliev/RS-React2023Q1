import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = { search: '' };

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchQuery: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { searchQuery } = searchSlice.actions;

export default searchSlice.reducer;
