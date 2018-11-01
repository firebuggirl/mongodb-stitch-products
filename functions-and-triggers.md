# Functions and Triggers

https://www.udemy.com/mongodb-the-complete-developers-guide/learn/v4/t/lecture/11861404?start=0



## Stitch Functions

    - EX:

    - Stitch UI -> Functions -> Create New Function :


          - name it `Greet` -> `Save`


          - write code/script/function via UI:


                - ` console.log('Greet'); `


    - Call function from w/in app via the Stitch SDK:

        - in `App.js` -> w/in `constructor`:

              ` this.client.callFunction('Greet'); `


        - Go back to `Stitch UI` -> `Logs` to view function being called


        - Functions run entirely on the server. End users can not see code on front end!!



## Stitch Triggers


    - EX: Execute a function on a `trigger`

          - `Stitch UI` -> `Triggers` -> `Authentication Trigger` -> `Add Authentication Trigger`:

                - can add trigger based on whether a user is created/logged in/&/or logged out

          - `Stitch UI` -> `Triggers` -> `Database Trigger` -> `Add Database Trigger`:

                - name `ProductInsert`
