const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const Review = require('../models/review')

router.post('/post', reviewsCtrl.create);
router.get('/', reviewsCtrl.reviews)

module.exports = router;