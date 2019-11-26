import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }



  getLinks() {
    if (this.props.loggedIn) {
      return (
      <div>
        <div className="l-side-buttons">
          <Link to={"/movies"}>All Movies</Link>
          <Link to={"/my-list"}>My List</Link>
        </div>
        <div>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      </div>
      );
    } else {
      return (
        <div className="r-side-buttons">
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Chirper</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
