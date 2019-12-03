import { connect } from "react-redux";
import { fetchMovie } from "../../actions/movie_actions";
import MovieSearch from "./movie_search";

const mapStateToProps = state => {
  return {
    movies: state.movies.allMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: movieId => dispatch(fetchMovie(movieId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
