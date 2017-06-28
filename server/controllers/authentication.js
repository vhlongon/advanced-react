const User = require('../models/user');

exports.signup = (req, res, next) => {
  const { body: { email, password } } = req;

  if(!email || !password) {
    return res.status(422).send({error: 'You must provide email and password'})
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
      user.save().then(res.json(user)).catch(err => next(err));
    },
    err => {
      next(err);
    }
  );
};
