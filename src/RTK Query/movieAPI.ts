import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '62206d4957df9dd79d427a079d453822';
const BASE_URL = 'https://api.themoviedb.org/3';

export const topMovieApi = createApi({
  reducerPath: 'topMovieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}` }),

  endpoints: (builder) => ({
    getTopMovie: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetTopMovieQuery } = topMovieApi;
