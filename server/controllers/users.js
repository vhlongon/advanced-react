const User = require('../models/user');

const getUsersDetails = ({ _id, email }) => ({ id: _id, email });

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
