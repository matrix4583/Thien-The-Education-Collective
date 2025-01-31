const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const user = require('../models/user');

router.get('/users', usersCtrl.index);


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

module.exports = router;