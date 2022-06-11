const router = require('express').Router();
const usersCtrl = require('../controllers/users');
//const addPostCtrlOne = require('../controllers/addPostController');
//const addPostTestCtrl = require('../controllers/addPostTestController');
const addCreateDataCtrl = require('../controllers/createController');
const addSuccessPostCtrl = require('../controllers/successController');
const fetchController= require('../controllers/fetch-controller');



router.get('/users', usersCtrl.index);
//router.get('/addPosts', addPostCtrlOne.addPost);
//router.get('/addPostsTestView', addPostTestCtrl.addPostTestController);
router.post('/create', addCreateDataCtrl.createData);
router.get('/userForm', addCreateDataCtrl.userForm);
router.get('/SuccessPost3', addSuccessPostCtrl.successController);
router.get('/fetch-data',fetchController.fetchData);


function isLoggedIn(req, res, next)
{
    if(req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}


module.exports = router;