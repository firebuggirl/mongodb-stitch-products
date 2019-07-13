import React, { Component } from 'react';

import './Auth.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class AuthPage extends Component {
  state = { email: '', password: '' };

  inputChangeHandler = (event, input) => {
    this.setState({ [input]: event.target.value });
  };




  render() {
    let signupButtonText = 'Signup';
    let loginButtonText = 'Login';
    let resetButtonText = 'Reset Password';
    if (this.props.mode === 'signup') {
      signupButtonText = 'Login';
      loginButtonText = 'Signup';
    }
    return (
      <main>
        <section className="auth__mode-control">
          <Button type="button" onClick={this.props.onAuthModeChange}>
            {signupButtonText}
          </Button>
        </section>
        <section className="auth__mode-control">
          <h1> Welcome to Sue's Guitar Emporium!</h1>
          <img width="300px" src="./guitar-emporium.png" alt="guitar" />
        </section>

        <form
          className="auth__form"
          onSubmit={event =>
            this.props.onAuth(event, {
              email: this.state.email,
              password: this.state.password
            })
          }
        >
          <Input
            label="E-Mail"
            config={{ type: 'email' }}
            onChange={event => this.inputChangeHandler(event, 'email')}
          />
          <Input
            label="Password"
            config={{ type: 'password' }}
            onChange={event => this.inputChangeHandler(event, 'password')}
          />
          <Button type="submit">{loginButtonText}</Button>

        </form>

        <form
          className="auth__form"
          onSubmit={event =>
            this.props.onResetPassword(event, {
              email: this.state.email
            })
          }
        >
        <Input
          label="Reset Password - Enter Email"
          config={{ type: 'email' }}
          onChange={event => this.inputChangeHandler(event, 'email')}
        />

        <Button type="submit">{resetButtonText}</Button>
        </form>
</main>



    );
  }
}
export default AuthPage;
