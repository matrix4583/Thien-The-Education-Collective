const User = require('../models/user')
const Cart = require('../models/cart')

module.exports = {
    addToCart
}

function addToCart(req,res) {
    const newCart = new Cart()
    const prices = []
    const items = []
    console.log(typeof req.body.item)
    if(typeof req.body.item === "string"){
        const splitItem = req.body.item.split('.')
        items.push(splitItem[0])
        prices.push(parseInt(splitItem[1])) 
    } else {
        console.log(typeof req.body.item,'HEEERRREEE', req.body.item.length)
        for(let i=0;i<req.body.item.length;i++){
            const splitItem = req.body.item[i].split('.')
            items.push(splitItem[0])
           prices.push(parseInt(splitItem[1])) 
        }
    }


    let sum = prices.reduce(function(a, b){
        return a + b;
    }, 0);
    newCart.total = sum
    newCart.item = items
    newCart.price = prices
    User.cart = newCart
    newCart.save(function(err){
        res.redirect('/cart')
    })
}