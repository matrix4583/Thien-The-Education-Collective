const User = require('../models/user')
const Cart = require('../models/cart')

module.exports = {
    addToCart
}

function addToCart(req,res) {
    const newCart = new Cart()
    //console.log(req.body,'reqqq')
    const prices = []
    const items = []
    for(let i=0;i<req.body.item.length;i++){
        //console.log(req.body.item[i], 'heeerrree')
        const splitItem = req.body.item[i].split('.')
        //console.log(splitItem)
        items.push(splitItem[0])
       prices.push(parseInt(splitItem[1])) 
    }
    console.log(items,prices)
    newCart.item = items
    newCart.price = prices

    User.cart = newCart
    newCart.save(function(err){
        res.redirect('/cart')
    })
}