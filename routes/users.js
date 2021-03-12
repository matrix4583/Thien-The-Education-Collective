const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const user = require('../models/user');

router.get('/users', usersCtrl.index);
router.get('/about', usersCtrl.about);
router.get('/menu', usersCtrl.menu)
router.get('/order',isLoggedIn, usersCtrl.order)
router.get('/cart',isLoggedIn, usersCtrl.cart)



function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next()
    // req.Authenticated function is given to us by passport
    res.redirect('/auth/google')
}


module.exports = router;