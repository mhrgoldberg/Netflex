import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
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

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul className="errors-list">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li className="errors-item"key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <h1>Sign In</h1>
                <p>Sign in to start watching or restart your membership</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form-form">
                        <div className="input-box">
                            <label htmlFor="input-email"><div className="input-text">Email:</div></label>
                            <input id="input-email" type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="input-password"><div className="input-text">Password:</div></label>
                            <input id="input-password" type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
                        </div>
                        {this.renderErrors()}                        
                        <input className="input-box" type="submit" value="Sign In" />
                        <div className="below-signin">rememberme/needhelp</div>
                        <div className="below-signin">DemoLoginLikeFb</div>
                        <p>New to Netlix?</p>
                        <p>No ads. Watch anywhere. Cancel Anytime.</p>
                        <input className="input-box" type="submit" value="Log In As Demo User >" onClick={this.handleDemoUser}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);