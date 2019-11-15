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
  switch (action.type) {
    case FETCH_MOVIES_COMPLETED:
      return {...state, ...action.payload, isLoading: false};
    case FETCH_MOVIES:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case FETCH_MOVIES_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
      });
    default:
      return state
  }
};

export const getMovies = () => async dispatch => {
  dispatch(fetchMovies());

  try {
    const movies = await api.getMovies();
    console.log({movies})
    dispatch(fetchMoviesCompleted(movies));
  } catch (e) {
    dispatch(fetchMoviesError(e));
  }
};
