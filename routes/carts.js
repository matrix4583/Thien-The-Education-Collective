const router = require('express').Router();
const cartsCtrl = require('../controllers/carts');
const cart = require('../models/cart');

router.post('/', isLoggedIn, cartsCtrl.addToCart)

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

module.exports = router;