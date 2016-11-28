var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//requied packages for login and db communication.
var mongoose = require('mongoose');
var config = require('./config/globalVars');
mongoose.connect(config.db);

// include passport packages, and all that terrible terrible shit that needs to be
// done for adding an account.
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var localStrategy = require('passport-local').Strategy;

//sub page setup and requirements for the 4 pages where a switch has to happen to work properally
//as if I declare the scope of angular here, they won't work properally and the NG-controller
// interfears with express' data base connect and intterupts gets/post calls.
var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var register = require ('./routes/register');

var app = express();

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

app.use('/', index); //I know this is double booking, but I like it this way
app.use('/index', index);
app.use('/users', users);
app.use('/login', login);
app.use('/register', register);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//register and login information





/*
experimental legecy code for getting angular and express to boot together,
however as is typical with web 'the castle has already been abondoned',
and this functionality no longer works in the modern versions of angular
and express.


 var index = require('./routes/index');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();



var index = require('./routes/index');
var users = require('./routes/users');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// view engine setup
app.use('views', path.join(__dirname, 'views'));
app.use('view engine', 'ejs');


// Routes

app.use('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API

app.get('/api/posts', api.posts);

app.get('/api/post/:id', api.post);
app.post('/api/post', api.addPost);
app.put('/api/post/:id', api.editPost);
app.delete('/api/post/:id', api.deletePost);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Start server

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}); */
