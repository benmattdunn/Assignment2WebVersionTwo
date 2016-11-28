//page routing subdivided because I hate that spreed out setup.

var express = require('express');
var router = express.Router();

// render the page for login
var path = require('path');
//get register page
router.get('/', function(req, res, next) {
    res.render(path.join(__dirname, '../', 'views', 'register'));
});


//post methods

//get the post method for setting up and account
router.post('/register', function(req, res, next) {
  // use the Account model and passort to create a new user
  Account.register(new Account(
      { username: req.body.username }),
      req.body.password,
      req.body.displayName, //user name and display name can be different.
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

