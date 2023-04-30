import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './formSlice';
import searchReducer from '../RTK/searchSlice';
import { MovieApi } from '../RTK_Query/movieAPI';

export const store = configureStore({
  reducer: {
    form: cardsReducer,
    search: searchReducer,
    [MovieApi.reducerPath]: MovieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MovieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
