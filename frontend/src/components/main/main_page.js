import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class MainPage extends React.Component {
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/movies" />
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mSTP = (state) => {
  return {
    isAuthenticated: state.session.isAuthenticated
  }
}

export default connect(mSTP)(MainPage);