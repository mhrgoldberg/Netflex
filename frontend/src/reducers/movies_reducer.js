import { RECEIVE_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions';

const MoviesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MOVIES:
      action.movies.forEach(movie => {
        newState[movie.id] = movie;  //or newState[movie._id] ? newState[movie["_id"]]?
      });
      return newState;
    case RECEIVE_MOVIE:
      newState[action.movie.id] = action.movie;  //also not sure abt this one (same as above)
      return newState;
    default:
      return state;
  }
};

export default MoviesReducer;