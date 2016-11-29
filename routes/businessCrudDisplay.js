var express = require('express');
var router = express.Router();


var Account = require('../models/account');
// GET main drinks page

router.get('/', function(req, res, next) {
    // use the Drink model to query the db for drink data
    Account.find(function(err, accounts) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // load the drinks page and pass the query result
            res.render('businessAddEditDelete', {

                accounts: accounts,
                user: req.user,
                username: req.session.username,
                pageName: 'manage your business'
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