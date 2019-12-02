import { getMovies, getMovie, APISearch } from '../util/movie_api_util';

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";


export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
})

export const fetchMovies = () => dispatch => (
  getMovies()
    .then(movies => dispatch(receiveMovies(movies)))
    .catch(err => console.log(err))
);

export const fetchMovie = movieId => dispatch => (
  getMovie(movieId)
    .then(movie => dispatch(receiveMovie(movie)))
    .catch(err => console.log(err))
);

export const search = (value) => dispatch => (
  APISearch(value)
    .then(movies => dispatch(receiveMovies(movies)))
    .catch(err => console.log(err))
    );