const mongoose = require('mongoose');

// Create your User Model

// store atleast googleid
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);