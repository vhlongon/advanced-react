const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On save hook, encrypt password
// before saving a model, run this function
// use a normal function to get the right 'this' context (comming from the User instance created using the model)
userSchema.pre('save', function(next) {
  // generate a salt then run callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    // hash (encrypt) our password using the salt
    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err);

      // overwrite plain text password with encrypted password
      this.password = hash;
      // go ahead and save the model
      next();
    });
  });
});

// everything inside a schema 'methods' prop is available to us
// when creating new instances of the model
userSchema.methods.comparePassword = (candidatePassword, storedPassword) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, storedPassword, (err, isMatch) => {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// export the model
module.exports = ModelClass;
