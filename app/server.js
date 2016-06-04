'use strict';

const app = require('./app');
const http = require('http');

const port = process.env.port || 2222;

let server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on port ${ port }`);
});
