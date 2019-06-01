import * as api from '../api/api';

const FETCH_MOVIES = 'FETCH_MOVIES';
const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
const FETCH_MOVIES_COMPLETED = 'FETCH_MOVIES_COMPLETED';

const initialState = {
  movies: [],
  isLoading: false,
};

const fetchMovies = () => ({ type: FETCH_MOVIES });

const fetchMoviesError = error => ({
  type: FETCH_MOVIES_ERROR,
  payload: { error },
});

const fetchMoviesCompleted = movies => ({
  type: FETCH_MOVIES_COMPLETED,
  payload: { movies },
});

export default (state = initialState, action) => {
  return state;
};

export const getMovies = () => async dispatch => {
  dispatch(fetchMovies());

  try {
    const movies = await api.getMovies();

    dispatch(fetchMoviesCompleted(movies));
  } catch (e) {
    dispatch(fetchMoviesError(e));
  }
};
