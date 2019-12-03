import { connect } from "react-redux";
import { fetchMovie } from "../../actions/movie_actions";
import {fetchList, addNewItem } from "../../actions/list_actions";

import MovieSearch from "./movie_search";

const mapStateToProps = state => {
  return {
    movies: state.movies.allMovies,
    user: state.session.user,
    list: Object.values(state.lists.items)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: movieId => dispatch(fetchMovie(movieId)),
    fetchList: userId => dispatch(fetchList(userId)),
    addNewItem: item => dispatch(addNewItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
