import { combineReducers } from 'redux';
import movieReducer from './movies/movie.reducer';
const rootReducer = combineReducers({  movie:movieReducer});
export default rootReducer;
