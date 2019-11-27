import React from "react";
import { Link } from "react-router-dom";

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
        <div className="nav-bar-links">
          <div className="l-side-nav-bar-links">
            <Link to={"/movies"}>All Movies</Link>
            <Link to={"/my-list"}>My List</Link>
          </div>
          <div className="r-side-nav-bar-links">
            <form className="search-form">
              <div className="input-container">
                <i className="fas fa-search"></i>
                <input type="search" placeholder="Search" />
              </div>
            </form>
            <div className="dropdown">
              <div className="nav-bar-logo"></div>
              <i className="fas fa-angle-down"></i>
              <div className="up-arrow"></div>
              <ul className="dropdown-content">
                <li key="logout" onClick={this.logoutUser}>
                  logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="r-side-nav-bar-links">
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-content">
          <h1>Netflex</h1>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;
