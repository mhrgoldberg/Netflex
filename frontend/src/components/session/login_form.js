import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
      clickEmail: false,
      clickPw: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.clickEmail = this.clickEmail.bind(this);
    this.clickPw = this.clickPw.bind(this);
    this.parseInputEmail = this.parseInputEmail.bind(this);
    this.parseInputPassword = this.parseInputPassword.bind(this);
  }

  // Once the user has been authenticated, redirect to the movies page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/movies");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleDemoUser(e) {
    e.preventDefault();
    let user = {
      email: "demo@demo.demo",
      password: "password"
    };
    this.props.login(user);
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  parseInputEmail(e) {
    if (this.state.clickEmail) {
      return <div className="input-text-clicked">Email:</div>;
    } else {
      return <div className="input-text">Email:</div>;
    }
  }

  clickEmail() {
    if (this.state.clickEmail) {
      this.setState({ clickEmail: false });
    } else {
      this.setState({ clickEmail: true });
    }
  }
    parseInputPassword(e) {
    if (this.state.clickPw) {
      return <div className="input-text-clicked">Password:</div>;
    } else {
      return <div className="input-text">Password:</div>;
    }
  }

  clickPw() {
   if (this.state.clickPw) {
     this.setState({ clickPw: false });
   } else {
     this.setState({ clickPw: true });
   }
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul className="errors-list">
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="errors-item" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="to-flex-row-center login-bg">
        <div className="login-form-container">
          <h1 className="logo-signin">Sign In</h1>
          <h2>Sign in to start watching or restart your membership</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="login-form-form">
              <div className="input-box2">
                <label htmlFor="input-email">{this.parseInputEmail()}</label>
                <input
                  id="input-email"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder=""
                  onClick={this.clickEmail}
                />
              </div>
              <div className="input-box2">
                <label htmlFor="input-password">
                  {this.parseInputPassword()}
                </label>
                <input
                  id="input-password"
                  type="password"
                  onClick={this.clickPw}
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder=""
                />
              </div>
              {this.renderErrors()}
              <button className="input-box2 signin-button">
                <div>Sign In</div>
              </button>

              <div className="linebreak"></div>
              <button className="demo-input" onClick={this.handleDemoUser}>
                <div>Login as Demo User</div>
              </button>
              <div className="linebreak"></div>
              <button className="demo-input" onClick={this.handleSignupButton}>
                <div>Sign Up ></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
