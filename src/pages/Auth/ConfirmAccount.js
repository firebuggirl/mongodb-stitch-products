import React, { Component } from 'react';
import {
  Stitch,
  UserPasswordAuthProviderClient
} from 'mongodb-stitch-browser-sdk';

import './ConfirmAccount.css';
// https://www.udemy.com/mongodb-the-complete-developers-guide/learn/v4/t/lecture/11861392?start=0
class AuthPage extends Component {
  componentDidMount() {
    const queryUrl = window.location.search;
    const queryParams = new URLSearchParams(queryUrl);
    const token = queryParams.get('token');//get/pass token from url that gets sent to your email when signing up/creating new user
    const tokenId = queryParams.get('tokenId');
    const emailPassClient = Stitch.defaultAppClient.auth.getProviderClient(
      UserPasswordAuthProviderClient.factory
    );
    emailPassClient
      .confirmUser(token, tokenId)
      .then(() => {
        this.props.history.replace('/');
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <main className="confirm-account-page">
        <p>Confirming Account...</p>
      </main>
    );
  }
}
export default AuthPage;
