var express = require('express');
var router = express.Router();

// render the page for login
var path = require('path');
//get register page
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname, '../', 'views', 'login'));
});

//standard login methods





module.exports = router;

