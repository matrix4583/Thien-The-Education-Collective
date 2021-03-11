const User = require('../models/user')

module.exports = {
    index,
    about,
    menu,
    order
}

function index(req, res, next){

    res.render('index')
    // let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    // let sortKey = req.query.sort || 'name';
    // User.find(modelQuery)
    // .sort(sortKey).exec(function(err, user){
    //     if(err) return next(err)
    //     //passing search values, name, and sortKey, to the ejs
    //     res.render('users/index', {
    //         users,
    //         user: req.user,
    //         name: req.query.name,
    //         sortKey
    //     });
    // });
}
function about(req,res,next){
    res.render('about')
}
function menu(req,res,next){
    res.render('menu')
}
function order(req,res,next){
    res.render('order')
}