'use strict';

const express = require('express');
const path = require('path');

let app = express();

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Threes in JS</title>
      </head>
      <body>
        <div id="content"></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
        <script src="/app-client.js"></script>
      </body>
    </html>
  `);
});

app.use(express.static(path.resolve('build/')));

module.exports = app;
