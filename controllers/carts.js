
const User = require('../models/user')
const Cart = require('../models/cart')

module.exports = {
    addToCart,
    remove 
}

function remove(req, res){
    res.redirect('/cart')
}

function mergeArrays(arr, answer=[]){
    for(let i=0; i< arr.length;i++){
        if(Array.isArray(arr[i])){
            mergeArrays(arr[i], answer)
        } else {
            answer.push(arr[i])
        }
    }
    return answer
}

function addToCart(req,res) {
    let newCart = new Cart()
    let prices = []
    let items = []
    
    if(User.cart){
        if(typeof req.body.item === "string"){
            const splitItem = req.body.item.split('.')
            items.push(splitItem[0])
            prices.push(parseInt(splitItem[1])) 
        } else {
            for(let i=0;i<req.body.item.length;i++){
                const splitItem = req.body.item[i].split('.')
                items.push(splitItem[0])
               prices.push(parseInt(splitItem[1])) 
            }
        }
        let sum = prices.reduce(function(a, b){
            return a + b;
        }, 0);
        User.cart.total = User.cart.total + sum
        User.cart.item.push(items) 
        User.cart.price.push(prices)
        let flatItems = User.cart.item;
        let flatPrices = User.cart.price;
        User.cart.item = mergeArrays(flatItems)
        User.cart.price = mergeArrays(flatPrices)
        newCart = User.cart;
    } else {
        if(typeof req.body.item === "string"){
            const splitItem = req.body.item.split('.')
            items.push(splitItem[0])
            prices.push(parseInt(splitItem[1])) 
        } else {
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
    }
    newCart.save(function(err){
        res.redirect('/cart')
    })
}