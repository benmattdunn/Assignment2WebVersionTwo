var express = require('express');
var router = express.Router();
var session = require('express-session');

//required link to the business mode,
var business = require('../models/business');


//redirect user to main login if the user is not logged in.
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}


// home page router, business are displayed here.
router.get('/',isLoggedIn, function(req, res, next) {
    res.render('businessadd', {
        user: req.user,
        username: req.user.username,
        pageName: 'add business',
        messages: ''
    });
});


router.post('/', isLoggedIn, function(req, res, next) {
    var d = new Date(); //get date
    business.create( {
        businessname: req.body.businessname,
        businesstags: req.body.businesstags,
        businessdescription: req.body.businessdescription,
        businessaddress: req.body.businessaddress,
        addbyusername: req.user.username,
        addbyuserid: req.user.user_id,
        dateadded: d.toDateString()
    }, function(err, Drink) {
        if (err) {
            console.log(err);
            res.render('businessadd', {
                pageName: 'business Add Error!',
                messages: 'Could not add the business' + err,
                user:req.user,
                username: req.user.username
            } );

        }
        else {
            res.redirect('/'); //redirect with the current scope
        }
    });
});



module.exports = router;
