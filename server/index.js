// main starter point of the application on the server side

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// App setup
// morgan is a logging middleware to ouput each request from the browser in the terminal
app.use(morgan('combined'));
// bodyParser is a middleware responsive for parsing each incoming request as json
app.use(bodyParser.json({ type: '*/*' }));

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);

console.log(`Serve listning on: ${port}`);
