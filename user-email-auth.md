# Switch to User Email and Password Auth

https://www.udemy.com/mongodb-the-complete-developers-guide/learn/v4/t/lecture/11868968?start=15



      - `App.js`:


            - set default auth mode to false:

                ` isAuth: false, `

      - In `Stitch UI`:

            - -> `users` -> `providers`


                  - disable `anonymous` login

                  - choose `email/password` login instead

                        - set confirmation URL:

                            ` http://localhost:3000/confirm-account `//update to server later in production

                        - read docs on password reset


                            ` http://localhost:3000/reset-password `

                      - other options are optional..

                      - `save`


## Add functionality to Apps

      - in `App.js`:

          ` import {
              Stitch,
              UserPasswordAuthProviderClient,
              UserPasswordCredential
            } from 'mongodb-stitch-browser-sdk'; `


            - turn `client` constants into properties w/in constructor so can be used outside of constructor:

                  ` const emailPassClient = this.client.auth.getProviderClient(
                        UserPasswordAuthProviderClient.factory
                      ); ...`


      - in `Auth/ConfirmAccount.js`:

          ` import {
              Stitch,
              UserPasswordAuthProviderClient
            } from 'mongodb-stitch-browser-sdk'; `


        ` const emailPassClient = Stitch.defaultAppClient.auth.getProviderClient(
            UserPasswordAuthProviderClient.factory
          );
          emailPassClient
            .confirmUser(token, tokenId)
            .then(() => {
              this.props.history.replace('/');
            })
            .catch(err => {
              console.log(err);
          }); `


## Use confirmed user to log in


  - `App.js`

      ` const credential = new UserPasswordCredential( ...`

        - will receive confirmation email to confirm account
