import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  showResults(val) {
    console.log(val);
    if (val === "" || val.length <= 0) {
      return null
    } else {
      this.props.search(val).then(() => (this.props.history.push("/search")));

    }
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
                <input type="search" placeholder="Search" onKeyUp={(e) => {this.showResults(e.currentTarget.value)}} />
              </div>
            </form>
            <div className="dropdown">
              <div className="nav-bar-logo"></div>
              <i className="fas fa-angle-down"></i>
              <div className="up-arrow"></div>
              <ul className="dropdown-content">
                <li key="logout" onClick={this.logoutUser}>
                  Logout
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
          <Link to="/login">
            <h1>Netflex</h1>
          </Link>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
