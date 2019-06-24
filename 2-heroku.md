<!--


` git init
`

` heroku create -b https://github.com/mars/create-react-app-buildpack.git
`

` git add .
`

` git commit -m "react-create-app on Heroku"
`

` git push heroku master
`

- if build fails:

      `  git rm yarn.lock
      `

      ` git add .
      `

      ` git commit -m '.....'
      `

      ` git push heroku master
      `
- Forgot to add `REACT_APP_INITIALIZE_STITCH` env variable to Heroku UI => do this, then restart dynos


## Re-name app:

    ` heroku apps:rename guitar-shop
    ` -->
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
