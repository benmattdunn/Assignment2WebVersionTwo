//page routing was orginally subdivided, however that appeared to cause 'web errors from hell'
// have been put together so it actually works for navigation, I tried to do without doing this
// and the requests were not sent to the server.

var express = require('express');
var router = express.Router();
var passport = require('passport');
// account and the creation of the strategy.
var Account = require('../models/account');
var localStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var session = require('express-session');





//handlers for login page requests

router.get('/', function(req, res, next) {

    //var messages = req.session.messages || []; //flash.message;

    // clear the session messages
    //req.session.messages = [];

    res.render('login', {
        //title: 'Login',
        //messages: messages,
        user: req.user
    });
});

router.post('/', passport.authenticate('local', { //change
    successRedirect: '/index',
    failureRedirect: '/login',
    failureMessage: 'Invalid Login',
    failureFlash: true
}));
//logout requests
router.get('/logout', function(req, res, next) {
    // log the user out and redirect
    req.logout();
    res.redirect('/login');
});













module.exports = router;