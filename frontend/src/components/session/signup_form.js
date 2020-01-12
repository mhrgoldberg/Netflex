import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      errors: {},
      clickEmail: false,
      clickPw: false,
      clickPw2: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.clickEmail = this.clickEmail.bind(this);
    this.clickPw = this.clickPw.bind(this);
    this.clickPw2 = this.clickPw2.bind(this);
    this.parseInputEmail = this.parseInputEmail.bind(this);
    this.parseInputPassword = this.parseInputPassword.bind(this);
    this.parseInputPassword2 = this.parseInputPassword2.bind(this);
    this.checkEmailErrors = this.checkEmailErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  parseInputEmail(e) {
    if (this.state.clickEmail) {
      return <div className="input-text-clicked">Email:</div>;
    } else if (this.state.email.length > 0) {
      return <div className="input-text-clicked">Email:</div>;
    } else {
      return <div className="input-text">Email:</div>;
    }
  }

  clickEmail(e) {

    if (this.state.clickEmail) {
      this.setState({ clickEmail: false });
    } else {
      this.setState({ clickEmail: true });
    }
  }

  parseInputPassword(e) {
    if (this.state.clickPw) {
      return <div className="input-text-clicked">Password:</div>;
    } else if (this.state.password.length > 0) {
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

  parseInputPassword2(e) {
    if (this.state.clickPw2) {
      return <div className="input-text-clicked">Confirm Password:</div>;
    } else if (this.state.password2.length > 0) {
      return <div className="input-text-clicked">Confirm Password:</div>;
    } else {
      return <div className="input-text">Confirm Password:</div>;
    }
  }

  clickPw2() {
    if (this.state.clickPw2) {
      this.setState({ clickPw2: false });
    } else {
      this.setState({ clickPw2: true });
    }
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li key={`error-${i}`}>{this.state.errors[error]}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  checkEmailErrors() {

    let errors = Object.values(this.state.errors);
    let output = "input-box2"

    errors.forEach(error => {
      if (error.includes('Email')) {
        output = "input-box2 error-box"
      };
    })
    return output
  }

  checkPwErrors() {
    let errors = Object.values(this.state.errors);
    let output = "input-box2"

    errors.forEach(error => {
      if (error.includes('Password ')) {
        output = "input-box2 error-box"
      };
    })
    return output
  }

  checkPw2Errors() {
    let errors = Object.values(this.state.errors);
    let output = "input-box2"

    errors.forEach(error => {
      if (error.includes('match')) {
        output = "input-box2 error-box"
      };
    })
    return output
  }

  render() {
    return (
      <div className="to-flex-row-center login-bg">
        <div className="login-form-container">
          <h1 className="logo-signin flicker">Sign Up</h1>
          <div className="linebreak pad-bot"></div>
          <form onSubmit={this.handleSubmit}>
            <div className="login-form-form">
              <div className={this.checkEmailErrors()}>
                <label htmlFor="input-email">{this.parseInputEmail()}</label>
                <input
                  id="input-email"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder=""
                  onClick={this.clickEmail}
                  onBlur={this.clickEmail}
                />
              </div>
              <div className={this.checkPwErrors()}>
                <label htmlFor="input-password">
                  {this.parseInputPassword()}
                </label>
                <input
                  id="input-password"
                  type="password"
                  onClick={this.clickPw}
                  onBlur={this.clickPw}
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder=""
                />
              </div>
              <div className={this.checkPw2Errors()}>
                <label htmlFor="input-password2">
                  {this.parseInputPassword2()}
                </label>
                <input
                  id="input-password2"
                  type="password"
                  onClick={this.clickPw2}
                  onBlur={this.clickPw2}
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder=""
                />
              </div>
              <div className="linebreak"></div>
              <button className="demo-input">
                <div className="sign-btn">Sign Up </div>
              </button>
              {/* {this.renderErrors()} */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);