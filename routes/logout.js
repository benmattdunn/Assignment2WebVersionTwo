//logout router

var express = require('express');
var router = express.Router();
var passport = require('passport');
// account and the creation of the strategy.
var Account = require('../models/account');
var localStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var session = require('express-session');

//logout put here as it seems to make most sense as index is a general handler
router.get('/', function (req, res){
    req.session.destroy(function (err) {
        res.redirect('/index'); //Inside a callback… bulletproof!
    });
});

module.exports = router;