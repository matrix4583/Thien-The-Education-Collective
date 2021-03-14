const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Review', reviewSchema);