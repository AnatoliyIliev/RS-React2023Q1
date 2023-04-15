import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './formSlice';
import searchReducer from '../RTK/searchSlice';
import { topMovieApi } from '../RTK Query/movieAPI';

export const store = configureStore({
  reducer: {
    form: cardsReducer,
    search: searchReducer,
    [topMovieApi.reducerPath]: topMovieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(topMovieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
