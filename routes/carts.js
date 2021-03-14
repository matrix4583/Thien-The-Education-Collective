const router = require('express').Router();
const cartsCtrl = require('../controllers/carts');
const cart = require('../models/cart');

router.post('/', isLoggedIn, cartsCtrl.addToCart)


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next()
    // req.Authenticated function is given to us by passport
    res.redirect('/auth/google')
}


module.exports = router;