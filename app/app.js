'use strict';

import express from 'express';
import path from 'path';

let app = express();

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div id="content"></div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.2/react.js"></script>
        <script src="/app-client.js"></script>
      </body>
    </html>
  `);
});

app.use(express.static(path.resolve('build/')));

export default app;
