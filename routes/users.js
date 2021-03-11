const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const user = require('../models/user');

router.get('/users', usersCtrl.index);
router.get('/about', usersCtrl.about);
router.get('/menu', usersCtrl.menu)
router.get('/order', usersCtrl.order)


module.exports = router;