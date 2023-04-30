import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieDetailsCard } from '../types';

const API_KEY = '62206d4957df9dd79d427a079d453822';
const BASE_URL = 'https://api.themoviedb.org/3';

export const MovieApi = createApi({
  reducerPath: 'MovieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),

  endpoints: (builder) => ({
    getTopMovie: builder.query({
      query: () => `/trending/movie/day?api_key=${API_KEY}`,
    }),
    getSearchMovie: builder.query({
      query: (searchQuery) => `/search/movie?api_key=${API_KEY}&query=${searchQuery}`,
    }),
    getMovieByID: builder.query<MovieDetailsCard, number>({
      query: (id) => `/movie/${id}?api_key=${API_KEY}&language=en-US`,
    }),
  }),
});

export const { useGetTopMovieQuery, useGetSearchMovieQuery, useGetMovieByIDQuery } = MovieApi;
