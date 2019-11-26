import { RECEIVE_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions';

const MoviesReducer = (state = {allMovies: [], selectedMovie: {}}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MOVIES:
      return Object.assign(newState, {allMovies: action.movies.data});
    case RECEIVE_MOVIE:
      newState['selectedMovie'] = action.movie.data; 
      return newState;
    default:
      return state;
  }
};

export default MoviesReducer;