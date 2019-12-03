import { connect } from "react-redux";
import ListIndex from "./list_index";
import { deleteItem, fetchList } from "../../actions/list_actions";
import { fetchMovie } from "../../actions/movie_actions";

const mapStateToProps = state => {
  return {
    user: state.session.user,
    list: Object.values(state.lists.items),
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: movieId => dispatch(deleteItem(movieId)),
    fetchList: userId => dispatch(fetchList(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
