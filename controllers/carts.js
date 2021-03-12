const User = require('../models/user')
const Cart = require('../models/cart')

module.exports = {
    addToCart
}

function addToCart(req,res) {
    const newCart = new Cart()
    //console.log(req.body.item)
    const items = JSON.parse(req.body.item)
    //console.log(items.item,'HEREEEE')
    newCart.item = items.item
    newCart.price = items.price
    User.cart = newCart
    //console.log(User.cart)
    newCart.save(function(err){
        res.redirect('/cart')
    })
}