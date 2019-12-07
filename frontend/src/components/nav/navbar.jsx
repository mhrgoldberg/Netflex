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

  showResults(e) {
    e.preventDefault();
    let val = e.currentTarget.value;
    if (e.keyCode === 13){
      console.log("hit enter");
      e.currentTarget.value = ""
      this.props.search(val).then(() => this.props.history.push("/search"));

    } else if ((val === "" || val.length <= 0) ) {
      return <div className="loading-background">
      <i className="fas fa-spinner"></i>
    </div>;
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
            <form onSubmit={(e) => e.preventDefault()}className="search-form">
              <div className="input-container">
                <i className="fas fa-search"></i>
                <input type="search" placeholder="Search" onKeyUp={(e) => {this.showResults(e)}} />
              </div>
            </form>
            <div className="dropdown">
              <div className="nav-bar-logo-container">
                <div className="nav-bar-logo"></div>
              </div>
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
            <h1 className="logo-signin">Netflex</h1>
          </Link>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
