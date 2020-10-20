var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TING',
												title1: 'Lab 2' });
});

module.exports = router;
