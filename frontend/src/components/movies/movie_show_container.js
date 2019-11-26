import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/movie_actions';
import MovieShow from './movie_show';

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies.selectedMovie,
    movieId: ownProps.match.params.movieId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);