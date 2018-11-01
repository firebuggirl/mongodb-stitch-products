# Upload your own Favicon

https://realfavicongenerator.net/favicon_result?file_id=p1cr3e8nh1b87jbp1luu5n03076#.W9jOIhPYqCc

  - place all downloaded files in `public directory`

  - add links to `head` section of `index.html` + remove reference to original icon & theme-color:


      ` <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff"> `


  - check this path in browser to see if file has been uploaded correctly:

      http://localhost:3000//favicon-32x32.png
