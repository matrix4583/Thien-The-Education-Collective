const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const user = require('../models/user');

router.get('/users', usersCtrl.index);
router.get('/about', usersCtrl.about);
router.get('/menu', usersCtrl.menu)
router.get('/order',isLoggedIn, usersCtrl.order)
router.get('/cart',isLoggedIn, usersCtrl.cart)
router.get('/checkout', usersCtrl.goCheckOut)
router.delete('/cart/:id', usersCtrl.delete)
router.delete('/cart/:id/checkout', usersCtrl.checkOut)



function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next()
    // req.Authenticated function is given to us by passport
    res.redirect('/auth/google')
}


module.exports = router;