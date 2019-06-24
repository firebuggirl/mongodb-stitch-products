## Heroku Node.js Build Script Change FAQ

https://help.heroku.com/P5IMU3MP/heroku-node-js-build-script-change-faq



  - Run to see status by upcoming Heroku changes:

      ` npx @heroku/update-node-build-script
      `


      - " This app will be affected by upcoming changes!

      This "build" script is not currently being run when this app is pushed to Heroku, but
      Heroku will start running it automatically starting on Monday, March 11.""

  -   add this to package.json so that ng build script does NOT run on Heroku:


      `   "heroku-postbuild": "echo Skip builds on Heroku"
      `
