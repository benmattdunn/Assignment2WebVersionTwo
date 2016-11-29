var express = require('express');
var router = express.Router();

//this is created for debug, as my DB connection is acting funny

var Account = require('../models/account');

router.get('/', function(req, res, next) {
    // use the Drink model to query the db for drink data
    Account.find(function(err, accounts) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // load the drinks page and pass the query result
            res.render('userCrudDisplay', {

                accounts: accounts,
                user: req.user,
                username: req.session.username,
                pageName: 'USER MANAGER'
            });
        }
    });
});


//debug, allowing for deleting of user account
router.get('/delete/:_id', function(req, res, next) {
    // get the id from the url
    var _id = req.params._id;

    // delete the document with this _id
    Account.remove( { _id: _id }, function(err) {
        if (err) {
            console.log(err);
            res.render('error', {
                message: 'Could not Delete user',
                error: err
            });
        }
        else {
            res.redirect('/userCrudDisplay');
        }
    });
});


module.exports = router;