const User = require('../models/user');

const getUsersDetails = ({ _id, email, name }) => ({ id: _id, email, name });

module.exports = (req, res, next) => {
  User.find({}).exec().then(
    (users, next) => {
      return res.status(200).send(users.map(getUsersDetails));
    },
    err => {
      next(err);
    }
  );
};
