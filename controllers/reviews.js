const User = require('../models/user')
const Cart = require('../models/cart')
const Review = require('../models/review')

module.exports = {
    create,
    reviews,
    delete: deleteReview
   
}

function deleteReview(req,res){
    console.log(req.params.id)
    Review.findByIdAndRemove(req.params.id, function(err){
        res.redirect('/reviews')
    })
}

function reviews(req,res){
    Review.find({}, function(err, reviews){
    
        
        if(req.user){
            const userEmail = req.user.email
            res.render('reviews', {reviews, userEmail})

        } else {
            res.render('reviews', {reviews})

        }
    })
    
}

function create(req, res){

    console.log(req.body)
    const newReview = new Review(req.body)
    console.log(newReview)
    newReview.save(function(err){
        res.redirect('/reviews')
    })


}