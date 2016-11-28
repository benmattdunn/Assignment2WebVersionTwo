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
  res.render('index');
});


module.exports = router;



//possible test code for angular
exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
