const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT Strategy
const jwtOptions = {
  // get whatever we sent the authorization pop in the header request
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  // sent the secret necessary to decode the token
  secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  const { sub } = payload;
  // See if the user ID in the payload exists in our database
  // if it does, call 'done' with that other
  // otherwise, call done withou a user object

  User.findBy(sub).exec().then(
    (user, next) => {
      done(null, user || false);
    },
    err => {
      done(err, false);
      next(err);
    }
  );
});

// Tell passport to use this stragegy
passport.use(jwtLogin);