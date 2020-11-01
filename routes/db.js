var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('db', { title: 'Ruta 2 DB',
												title1: 'Test de rutas' });
});

module.exports = router;

