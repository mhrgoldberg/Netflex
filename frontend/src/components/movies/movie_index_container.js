import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import MovieIndex from './movie_index';
import { fetchList, addNewItem } from '../../actions/list_actions';

const mapStateToProps = (state) => {
  return {
    movies: state.movies.allMovies,
    user: state.session.user,
    list: Object.values(state.lists.items)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchList: userId => dispatch(fetchList(userId)),
    addNewItem: item => dispatch(addNewItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);