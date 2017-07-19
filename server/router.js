const AuthenticationController = require('./controllers/authentication');
const usersController = require('./controllers/users');

module.exports = app => {
  app.post('/signup', AuthenticationController);
  app.get('/users', usersController);
};
