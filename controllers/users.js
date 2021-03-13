const User = require('../models/user')
const Cart = require('../models/cart')

module.exports = {
    index,
    about,
    menu,
    order,
    cart,
    delete: deleteCart,
    checkOut,
    goCheckOut
    
}
function goCheckOut(req,res){
    res.render('checkout')
}

function checkOut(req,res){
    delete User.cart;
    res.redirect('/checkout')

}
function index(req, res, next){
  
    res.render('index')
    // let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    // let sortKey = req.query.sort || 'name';
    // User.find(modelQuery)
    // .sort(sortKey).exec(function(err, user){
    //     if(err) return next(err)
    //     //passing search values, name, and sortKey, to the ejs
    //     res.render('users/index', {
    //         users,
    //         user: req.user,
    //         name: req.query.name,
    //         sortKey
    //     });
    // });
}
function deleteCart(req, res) {
    delete User.cart;
    res.redirect('/cart')
        
}

function about(req,res){
    res.render('about')
}
function menu(req,res){
    res.render('menu')
}
function order(req,res){
    res.render('order')
}
function cart(req,res){
    let items;
    let prices;
    let total;
    let cartId;
    if(User.cart){
       items = User.cart.item
       prices = User.cart.price
       total = User.cart.total
       cartId = User.cart._id
        // price = User.cart.price
       // console.log(User.cart,'ITEMS DEFINED HERE')
        res.render('cart', {items, prices, total, cartId})
    } else {
        res.render('cart',{items, prices, total, cartId})
    }
  
    
    
}