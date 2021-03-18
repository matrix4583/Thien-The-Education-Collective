const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    item: Array,
    price: Array,
    total: Number,
    quantity: Number,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },{
    timestamps: true
  });

  module.exports = mongoose.model('Cart', cartSchema);