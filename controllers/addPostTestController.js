const User = require('../models/user')

module.exports = 
{
    addPostTestController
}


function addPostTestController(req, res, next)
{
    res.render('addPostsTestEJS')
}