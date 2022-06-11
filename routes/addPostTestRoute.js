const User = require('../models/user')

module.exports = 
{
    addPostTestRoute
}


function addPostTestRoute(req, res, next)
{
    res.render('addPostsTestEJS')
}
