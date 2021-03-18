const User = require('../models/user')
const Cart = require('../models/cart')
const Review = require('../models/review')

module.exports = {
    create,
    reviews,
    delete: deleteReview
   
}

function deleteReview(req,res){
    Review.findByIdAndRemove(req.params.id, function(err){
        res.redirect('/reviews')
    })
}

function reviews(req,res){
    let avatars = []
    Review.find({}, function(err, reviews){
            if(req.user){
                const userEmail = req.user.email
                const userId = req.user._id
                const userName = req.user.name
                res.render('reviews', {reviews, userEmail, userId, userName})
            } else {
                res.render('reviews', {reviews})
            }
    })  
}

function create(req, res){
    const newReview = new Review(req.body)
    User.review = newReview._id
    newReview.user = req.user._id
    newReview.name = req.user.name
    newReview.avatar = req.user.avatar
    newReview.save(function(err){
        res.redirect('/reviews')
    })
}