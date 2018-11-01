# Stitch

https://www.udemy.com/mongodb-the-complete-developers-guide/learn/v4/t/lecture/11861356?start=0

    - = A `Serverless` Platform for building applications -> ie., no Node backend API

    - Based off of Atlas DB

    - Authentication -> Your app's users -> Access to DB

    - React to events -> execute code/functionality in cloud

    - Stitch QueryAnywhere -> Stitch Triggers -> Stitch functions

    - MongoDB Mobile

    - Stitch Services



## Start


    - From within Mongo Atlas UI -> click on Stitch Apps  -> create new application -> give name -> create

    - cd `stitch-01-starting-code` -> ` npm install` -> ` npm start `

## Using Stitch/Overview


    - `Clients` tab = choose application type ..ie., JS

    - `Rules` = access data

    - `Triggers` = Set up listeners to DB or authentication events

    - `Services` = EX: can set up/link up with AWS free

    - `Users` = view users signed up for app

    - `Values` = Static values ...rules and functions

    - `Functions` = can  create a new function to do while to find some javascript code that executes on the server side

    - `Logs` = view logs

    - `Push Notifications` = can add to mobile apps


## Install Stitch Client


    - From `client` tab:


        - ` npm install --save mongodb-stitch-browser-sdk@"^4.0.8" `


## Use Stitch in place of backend Restful API


    - in `src/pages/Product/Products.js`


        - ` import { Stitch, RemoteMongoClient } from 'mongodb-browser-stitch-sdk'; `


        - fetch data from Stitch via `fetchData`


    - in `App.js`:


      - ` import { Stitch } from 'mongodb-browser-stitch-sdk'; `


   - initialize Stitch via `constructor` in `App.js` with client/app ID:

         ` const client = Stitch.initializeDefaultAppClient('your-app-ID');//my app ID from Stitch client tab/page `


## Authenticate


    - `Stitch UI` -> `Users` -> `Providers`


        - choose authentication method -> use `anonymous` for now


   - In `App.js`


        - add `client.auth.loginWithCredential(new AnonymousCredential());` to constructor

        - import `AnonymousCredential` ..or other auth method selected


## Set up rules for accessing/fetching data


      - Sending Data Access Rule


          https://www.udemy.com/mongodb-the-complete-developers-guide/learn/v4/t/lecture/11861372?start=0



      - `Stitch UI` -> `Rules` tab -> `Add Collection` :


          - add `DB` + `collection` name(s)

          - select `template`//where user rules are set


          - `permissions` tab



                - can add additional `fields` with various rules/permissions that are independent of others:

                      - EX:

                          - Add `title` field -> set to `read only`

                - for now enable `read` access to all additional fields + `save`



## Fetching and converting Data


https://www.udemy.com/mongodb-the-complete-developers-guide/learn/v4/t/lecture/11861374?start=0


    - In `Products.js`:

          - see `  const transformedProducts = products.map(product => { .....`


## Deleting products


      - - In `Products.js`:


            - Connect to MongoDB :

                ` productDeleteHandler = productId => { `

                `   const mongodb = Stitch.defaultAppClient.getServiceClient( ....`

                ` .deleteOne({ _id: new BSON.ObjectId(productId) }) `


                ` npm i BSON ` + import.....

## Find a single product


    - `Product.js `

        - connect to MongoDB...import `BSON`

        - ` .find({ _id: new BSON.ObjectID(this.props.match.params.id) }) `


## Adding products

    - `EditProduct.js`

          - ` import { Stitch, RemoteMongoClient } ` + import `BSON`

          - connect to MongoDB:

              ` const mongodb = Stitch.defaultAppClient.getServiceClient(.... `


          - insert product data:

          ` .insertOne(productData); `


          - set `rules` for products collection in Stitch UI to write


## Updating products


    -  ` EditProduct.js`:


        - convert product to an array + convert native types + set state

        - connect to MongoDB + .....` .updateOne({ _id: new BSON.ObjectId(this.props.match.id)}, productData); `


## Fetching and converting Data


    - set default auth mode to `false` in `App.js`


    - in Stitch UI, go to -> `users` -> `providers` -> disable `anonymous login` + choose `email/password` instead -> enable `Email Confirmation URL`:


          - set to ` http://localhost:`
