const User = require('../models/user')

module.exports = 
{
    successController
}


function successController(req, res, next)
{
    res.render('SuccessPost3')
}