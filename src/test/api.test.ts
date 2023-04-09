import { describe, vi } from 'vitest';
import { fetchTopMovie, fetchSeachMovie, fetchDetailsMovie } from '../api/movieAPI';

describe('API functions', () => {
  it('fetchTopMovie should return top movie data', async () => {
    const movie = { name: 'Matrix' };
    const fetchMock = vi.fn().mockResolvedValueOnce(movie);
    global.fetch = fetchMock;

    const result = await fetchTopMovie();
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=62206d4957df9dd79d427a079d453822'
    );
    expect(result).toEqual(movie);
  });

  it('fetchSeachMovie should return searched movie data', async () => {
    const movie = { name: 'Matrix' };
    const fetchMock = vi.fn().mockResolvedValueOnce(movie);
    global.fetch = fetchMock;

    const result = await fetchSeachMovie('Matrix');
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/search/movie?api_key=62206d4957df9dd79d427a079d453822&query=Matrix'
    );
    expect(result).toEqual(movie);
  });

  it('fetchDetailsMovie should return details of movie', async () => {
    const movie = { name: 'Matrix' };
    const fetchMock = vi.fn().mockResolvedValueOnce(movie);
    global.fetch = fetchMock;

    const result = await fetchDetailsMovie(12345);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/movie/12345?api_key=62206d4957df9dd79d427a079d453822&language=en-US'
    );
    expect(result).toEqual(movie);
  });
});
