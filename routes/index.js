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
var Business = require('../models/business');

//logout put here as it seems to make most sense as index is a general handler
router.get('logout', function(req, res, next) {
  // log the user out and redirect
  req.logout();
  res.redirect('/login');
});



router.get('/',  function(req, res, next) {
  // use the Drink model to query the db for drink data
  Business.find(function(err, business) {
    if (err) {
      console.log(err);
      res.render('error');
    }
    else {
      // load the drinks page and pass the query result
      res.render('index', {

        business: business,
        user: req.user,
        username: req.session.username,
        pageName: 'Welcome to barrie Businesses'

      });
    }
  });
});

//git hub login put here because I don't want to setup another page this late at night. 
router.get('/github', passport.authenticate('github'), function(req, res, next) {});

/* GET /github/callback */
router.get('/github/callback', passport.authenticate('github', {
  failureRedirect: '/login',
  failureMessage: 'Invalid Login'
}), function(req, res, next){
  res.redirect('/index');
});





//possible test code for angular
exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

module.exports = router;