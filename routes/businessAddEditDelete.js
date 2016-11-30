var express = require('express');
var router = express.Router();

var business = require('../models/business');

// GET main drinks page

//redirect user to main login if the user is not logged in.
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}



router.get('/',isLoggedIn, function(req, res, next) {

    business.find(function(err, business) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // load the drinks page and pass the query result
            res.render('businessAddEditDelete', {

                business: business,
                user: req.user,
                username: req.session.username,
                pageName: 'manage your business'
            });
        }
    });
});



router.get('/delete/:_id',isLoggedIn, function(req, res, next) {
    // get the id from the url
    var _id = req.params._id;

    // delete the document with this _id
    business.remove( { _id: _id }, function(err) {
        if (err) {
            console.log(err);
            res.render('error', {
                message: 'Could not Delete business',
                error: err
            });
        }
        else {
            res.redirect('/businessAddEditDelete');
        }
    });
});


router.get('/:_id', isLoggedIn, function(req, res, next) {
    // get the id from the url
    var _id = req.params._id;
    // use Mongoose to get the selected drink document
    business.findById( { _id: _id }, function(err, business) {
        if (err) {
            console.log(err);
            res.render('error', {
                message: 'could not load the edit page',
                error: err
            });
        }
        else {
            res.render('businessEdit', {
                pageName: 'business Editing',
                business: business,
                username: req.session.username,
                user: req.user

            });
        }
    });
});





module.exports = router;