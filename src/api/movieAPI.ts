const API_KEY = '62206d4957df9dd79d427a079d453822';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovie(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok ? await response.json() : Promise.reject(new Error('No found'));
}

export function fetchTopMovie() {
  return fetchMovie(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchSeachMovie(searchQuery: string) {
  return fetchMovie(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
}
