const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

// 'sub' is short for 'subject' and it is a convension
// 'iat' is short for 'issued at time' also a convension
const createUserToken = user => {
  const iat = new Date().getTime();
  return jwt.encode({ sub: user.id, iat}, config.secret);
}

module.exports = (req, res, next) => {
  const { body: { email, password } } = req;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide email and password' });
  }
  // check if a user with the given email exists
  User.findOne({ email }).exec().then(
    (existingUser, next) => {
      // if the user with email does exist, return an error
      if (existingUser) {
        return res.status(422).send({ error: 'Email is in use' });
      }
      // if a user with email does NOT exist, create and save user record
      const user = new User({ email, password });
      // respond to request indicating the user was created
      // and send the token to the user
      user.save().then(() => res.json({ token: createUserToken(user) }));
    },
    err => {
      next(err);
    }
  );
};
