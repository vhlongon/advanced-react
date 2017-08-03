// main starter point of the application on the server side

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const { db } = require('./config');

// Use native promises instead of callbacks for mongon
mongoose.Promise = global.Promise;

console.log(db.connectionString);
// DB setup
// for local dev user: mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect('mongodb://localhost:auth/auth');
// this will create a database inside the mongo with the name 'auth'
// mongoose.connect('mongodb://test:test@ds131583.mlab.com:31583/react-auth', {
//   server: {
//     socketOptions: {
//       keepAlive: 300000,
//       connectTimeoutMS: 30000
//     }
//   },
//   replset: {
//     socketOptions: {
//       keepAlive: 300000,
//       connectTimeoutMS: 30000
//     }
//   }
// });

// App setup
// morgan is a logging middleware to ouput each request from the browser in the terminal
app.use(morgan('combined'));
// enable cross browser requests //
// it can take options to only allow certain url's to get through, for instance
app.use(cors());
// bodyParser is a middleware responsive for parsing each incoming request as json
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.PORT || 3080;
const server = http.createServer(app);

console.log(port);
server.listen(port);

console.log(`Serve listning on: ${port}`);
