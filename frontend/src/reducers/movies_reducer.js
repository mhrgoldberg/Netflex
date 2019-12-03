import { RECEIVE_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions';
import { RECEIVE_LIST, REMOVE_ITEM } from '../actions/list_actions';

const MoviesReducer = (state = {allMovies: [], selectedMovie: {}}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MOVIES:
      return Object.assign(newState, {allMovies: action.movies.data});
    case RECEIVE_MOVIE:
      newState['selectedMovie'] = action.movie.data; 
      return newState;
    case RECEIVE_LIST:
        return Object.assign(newState, {allMovies: action.list.data});
    case REMOVE_ITEM:
        delete newState['allMovies'][action.movieId];
        return newState;
    default:
      return state;
  }
};

export default MoviesReducer;