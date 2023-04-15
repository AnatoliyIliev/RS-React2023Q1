import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../RTK/movieSlice';
import cardsReducer from './formSlice';
import searchReducer from '../RTK/searchSlice';

export const store = configureStore({
  reducer: {
    form: cardsReducer,
    search: searchReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
