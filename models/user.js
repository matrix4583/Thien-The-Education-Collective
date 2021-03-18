const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    avatar: String,
    email: String,
    googleId: String,
    review: {type: mongoose.Schema.Types.ObjectId, ref: 'Review'},
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Cart'}
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);