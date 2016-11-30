var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

//custom code

var login = require('./routes/login');
var register = require('./routes/register');
var addbusiness = require('./routes/addbussiness');
var logout = require('./routes/logout');
var userBusinessess = require('./routes/businessAddEditDelete');



var userCrudDisplay = require('./routes/userCrudDisplay');
var userpage = require('./routes/userpage');




var app = express();

// use mongoose to connect to mongodb
var mongoose = require('mongoose');
var config = require('./config/globalVars');
mongoose.connect(config.db);

// include passport packages
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var localStrategy = require('passport-local').Strategy;

// initialize the passport packages for authentication
app.use(flash());

app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// link to the Account model we're going to build
var Account = require('./models/account');
passport.use(Account.createStrategy());

// configure facebook login
var facebookStrategy = require('passport-facebook').Strategy;

/*
passport.use(new facebookStrategy({
      clientID: config.ids.facebook.clientID,
      clientSecret: config.ids.facebook.clientSecret,
      callbackURL: config.ids.facebook.callbackURL
    }, function(accessToken, refreshToken, profile, cb) {
      // what to do when fb returns a profile
      // check if this fb profile is already in our accounts collection
      Account.findOne({ oauthID: profile.id }, function(err, user) {
        if (err) {
          console.log(err);
        }
        else {
          // if the user already exists, continue
          if (user !== null) {
            cb(null, user);
          }
          else {
            // valid fb user but not in mongodb yet.  Add the user.
            user = new Account({
              oauthID: profile.id,
              username: profile.displayName,
              created: Date.now()
            });

            user.save(function(err) {
              if (err) {
                console.log(err);
              }
              else {
                cb(null, user);
              }
            });
          }
        }
      });
    }
));*/


var githubStrategy = require('passport-github').Strategy;
// just copied, I understand the code, but I just had way to many syntax errors on this piece of shit.
passport.use(new githubStrategy({
      clientID: config.ids.gitHub.ClientID,
      clientSecret: config.ids.gitHub.clientSecret,
      callbackURL: config.ids.gitHub.callbackURL
    }, function(accessToken, refreshToken, profile, cb) {
      // what to do when gh returns a profile
      // check if this gh profile is already in our accounts collection
      Account.findOne({ oauthID: profile.id }, function(err, user) {
        if (err) {
          console.log(err);
        }
        else {
          // if the user already exists, continue
          if (user !== null) {
            cb(null, user);
          }
          else {
            // valid gh user but not in mongodb yet.  Add the user.
            user = new Account({
              oauthID: profile.id,
              username: profile.username,
              //created: Date.now()
            });

            user.save(function(err) {
              if (err) {
                console.log(err);
              }
              else {
                cb(null, user);
              }
            });
          }
        }
      });
    }
));


// read / write users between passport and mongodb
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_moduels')));

app.use('/', routes);
app.use('/index', routes);
app.use('/login', login);
app.use('/register', register);
app.use('/addbusiness', addbusiness);
app.use('/userpage', userpage);
app.use('/logout', logout);
app.use('/userCrudDisplay',userCrudDisplay);
app.use('/businessAddEditDelete', userBusinessess);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
