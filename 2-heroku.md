<!-- ## Re-name app:

    ` heroku apps:rename guitar-shop
    `  -->
- NOTE: Git remote add origin => add existing Github repo to refs

    ` git init

       git add .

       git commit -m "first commit"

       git remote add origin https://github.com/firebuggirl/mongodb-stitch-products.git

       heroku create guitar-shop

       `

       - copy paste `REACT_APP_INITIALIZE_STITCH` env variable in Heroku UI BEFORE pushing

       ` heroku config:add NODE_ENV=production
       `

         * add `Node Buildpack` via Heroku UI

          ` heroku open
          `


## Check to see that Heroku repo is up to date:

` git remote show heroku
`

##  see the full commit log for the heroku remote

` git checkout heroku/master
`
