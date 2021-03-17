const User = require('../models/user')
const Cart = require('../models/cart')
const Review = require('../models/review')

module.exports = {
    create,
    reviews,
    delete: deleteReview
   
}

function deleteReview(req,res){
    //console.log(req.params.id)
    Review.findByIdAndRemove(req.params.id, function(err){
        res.redirect('/reviews')
    })
}

function reviews(req,res){
    let avatars = []
    
    Review.find({}, function(err, reviews){
            if(req.user){
                //console.log(reviews, req.user._id,'here')
                const userEmail = req.user.email
                const userId = req.user._id
                const userName = req.user.name
                console.log(userId,'here', reviews)
                res.render('reviews', {reviews, userEmail, userId, userName})
            } else {
                //console.log(reviews,'here')
                // reviews.forEach(function(review){
                //     console.log(review.user)
                //     User.findById(review.user, function(err, user){
                //         console.log(user,'here')
                //     })
                // })
                //console.log(reviews)
                console.log(reviews)
                res.render('reviews', {reviews})
    
            }

    })
    
}

function create(req, res){

    console.log(req.user.avatar,'HERE')
    const newReview = new Review(req.body)
    //console.log(newReview)
    User.review = newReview._id
    newReview.user = req.user._id
    newReview.name = req.user.name
    newReview.avatar = req.user.avatar
    //console.log(User.review)
    newReview.save(function(err){
        res.redirect('/reviews')
    })


}