var express = require('express');
var router = express.Router();
var session = require('express-session');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}


//not much here, but it was really made for debugging purposes.
router.get('/', isLoggedIn, function(req, res, next) {
    console.log(req.user.username)
  res.render('userpage',{


        user: req.user,
        Tusername: req.user.username,
        Tdisplayname: req.user.displayName,
        Tpassword:req.user.password,
        Tuser_id: req.user.user_id,
          pageName: 'About your account',
  }

  );
});



module.exports = router;
