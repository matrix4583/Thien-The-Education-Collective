const User = require('../models/user')

module.exports = 
{
    addPost
}


function addPost(req, res, next)
{
    res.render('addPosts')
}
