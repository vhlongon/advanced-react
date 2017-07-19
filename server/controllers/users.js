const User = require('../models/user');

module.exports = (req, res, next) => {
  User.find({}).exec().then(
    (users, next) => {
      return res.status(200).send(users);
    },
    err => {
      next(err);
    }
  );
};
