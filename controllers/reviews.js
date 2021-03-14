const User = require('../models/user')
const Cart = require('../models/cart')
const Review = require('../models/review')

module.exports = {
    create,
    reviews
   
}

function reviews(req,res){
    Review.find({}, function(err, reviews){
        res.render('reviews', {reviews})

    })
    
}

function create(req, res){

    console.log(req.body)
    const newReview = new Review(req.body)
    newReview.save(function(err){
        res.redirect('/reviews')
    })


}