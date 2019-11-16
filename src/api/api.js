const API_KEY = '5265606bb69e99437c85eb04dc6f29b5';
const BASE_URL = 'https://api.themoviedb.org/3/';
//const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

export const getMovies = () =>
  fetch(
    `${BASE_URL}discover/movie?api_key=${API_KEY}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
  )
    .then(response => response.json())
    .then(({ results }) => results);

export const getImages = () => Promise.resolve({});
