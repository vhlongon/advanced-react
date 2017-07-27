const {signup, signin } = require('./controllers/authentication');
const index = require('./controllers/index');
const users = require('./controllers/users');
const passportService = require('./services/passport');
const passport = require('passport');

// create middleware to intercept the requests comming in and check if the user has a valid auth token
// since we are using token to check auth we don't want to create a session
const requireAuth = passport.authenticate('jwt', { session: false});

const requireSignin = passport.authenticate('local', { session: false});

module.exports = app => {
  // app.get('/', requireAuth, index);
  app.get('/', index);
  app.post('/signup', signup);
  app.post('/signin', requireSignin, signin);
  app.get('/users', users);
};
