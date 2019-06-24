import React, { Component } from 'react';
import {
  Stitch,
  UserPasswordAuthProviderClient
} from 'mongodb-stitch-browser-sdk';

import './ConfirmAccount.css';
// https://www.udemy.com/mongodb-the-complete-developers-guide/learn/v4/t/lecture/11861392?start=0
class AuthPage extends Component {
  state = { email: '' };

  inputChangeHandler = (event, input) => {
    this.setState({ [input]: event.target.value });
  };
  componentDidMount() {

    // Parse the URL query parameters
      const url = window.location.search;
      const params = new URLSearchParams(url);

      const token = params.get('token');
      const tokenId = params.get('tokenId');
      const newPassword = this.inputChangeHandler();

      // Confirm the user's email/password account
      const emailPassClient = Stitch.defaultAppClient.auth
        .getProviderClient(UserPasswordAuthProviderClient.factory);

      emailPassClient.resetPassword(token, tokenId, newPassword).then(() => {
        console.log("Successfully reset password!");
      }).catch(err => {
        console.log("Error resetting password:", err);
      });
  }


  render() {
    return (
      <main className="confirm-password-change">
        <p>Your Password Has Been Updated</p>
      </main>
    );
  }
}
export default AuthPage;
