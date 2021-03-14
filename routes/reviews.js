const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const Review = require('../models/review')

router.post('/post', reviewsCtrl.create);
router.get('/', reviewsCtrl.reviews)
router.delete('/:id',isLoggedIn, reviewsCtrl.delete)

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next()
    // req.Authenticated function is given to us by passport
    res.redirect('/uhoh')
}

module.exports = router;