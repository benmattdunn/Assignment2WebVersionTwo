var express = require('express');
var router = express.Router();

var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname, '../', 'views', 'index'));
});




module.exports = router;



//possible test code.
exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
