const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const addPostCtrl = require('../controllers/addPostController');
const user = require('../models/user');

router.get('/users', usersCtrl.index);
router.get('/addPosts', addPostCtrl.addPost);


function isLoggedIn(req, res, next)
{
    if(req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

module.exports = router;