import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { search  } from '../../actions/movie_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});


const mapDispatchToProps = dispatch => {
  return {
    search: (value) => dispatch(search(value)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);