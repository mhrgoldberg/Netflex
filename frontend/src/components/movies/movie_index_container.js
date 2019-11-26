import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import MovieIndex from './movie_index';

const mapStateToProps = (state) => {
  return {
    movies: state.movies.allMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);