import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../RTK/movieSlice';
import cardsReducer from '../RTK/cardsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
