import { combineReducers } from 'redux';

import movies from './movies';
import roles from './roles';

const rootReducer = combineReducers({
  movies,
  roles,
});

export default rootReducer;
