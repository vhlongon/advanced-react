const passport = require('passport');
const User = require('../models/user');
const { secret } = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Setup options for JWT Local Strategy
const jwtLocalOptions = {
  // we set this to 'email' because by default it is expected the user name to be available on the 'username' property,
  // but since we use the property 'email' we have to change it
  usernameField: 'email'
};

// Create local strategy
const localLogin = new LocalStrategy(
  jwtLocalOptions,
  (email, submittedPassword, done) => {
    // verify this username and password, call done with the user
    // if it is the correct username and password
    // otherwise call done with false

    // look on the your DB if there is already an user with the given email address
    User.findOne({ email }).exec().then(
      (user, next) => {
        if (!user) {
          done(null, false);
        } else {
          // compare passwords - is `password` equal to user.password?
          // but first we have to encrypt (using the salt we have) the submitted password
          // to compare with the value stored on the DB (which is also an encrypted password)
          // we don't ever decrypt the password retrieved from the db
          const { password: storedPassword } = user;
          user
            .comparePassword(submittedPassword, storedPassword)
            .then(isMatch => {
              if (!isMatch) {
                done(null, false);
              } else {
                done(null, user);
              }
            })
            .catch(err => {
              done(err, false);
            });
        }
      },
      err => {
        done(err, false);
        next(err);
      }
    );
  }
);

// Setup options for JWT Strategy
const jwtOptions = {
  // get whatever we sent the authorization pop in the header request
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  // sent the secret necessary to decode the token
  secretOrKey: secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  const { sub } = payload;
  // See if the user ID in the payload exists in our database
  // if it does, call 'done' with that other
  // otherwise, call done withou a user object

  User.findById(sub).exec().then(
    (user, next) => {
      done(null, user || false);
    },
    err => {
      done(err, false);
      next(err);
    }
  );
});

// Tell passport to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);
