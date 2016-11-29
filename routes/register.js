var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('register');
});


module.exports = router;


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




// home page router, business are displayed here.
router.get('/', function(req, res, next) {
  res.render('register', {
    messages: "go away meg",
    user: req.user
  });
});

passport.use(Account.createStrategy());


//create account stuff, one of the below works...
//I'm not sure which one, I'm scared to delete them.
//get the post method for setting up and account
router.post('/', function(req, res, next) {
  // use the Account model and passort to create a new user
  Account.register(new Account(
      { username: req.body.username,
        displayName: req.body.DisplayName
      })
      ,
      req.body.password,
      //user name and display name can be different.
      function(err, account) {
        if (err) {
          console.log(err);
          res.redirect('/register');
        }
        else {
          res.redirect('/login');
        }
      });
});




//get the post method for setting up and account
router.post('/', function(req, res, next) {
  // use the Account model and passort to create a new user
  Account.register(new Account(
      { username: req.body.username,
        displayName: req.body.DisplayName
      })
      ,
      req.body.password,
      //user name and display name can be different.
      function(err, account) {
        if (err) {
          console.log(err);
          res.redirect('/register');
        }
        else {
          res.redirect('/login');
        }
      });
});










module.exports = router;