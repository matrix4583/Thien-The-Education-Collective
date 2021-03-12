const mongoose = require('mongoose');

// Create your Cart Model

// store atleast googleid
const cartSchema = new mongoose.Schema({
    item: Array,
    price: Number,
    quantity: Number,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    menuItem: [menuItemSchema]
  },{
    timestamps: true
  });

  const menuItemSchema = new mongoose.Schema({
      item: String,
      price: Number
  })

  module.exports = mongoose.model('Cart', cartSchema);6