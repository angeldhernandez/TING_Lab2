var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ruta_1', { title: 'Ruta 1',
												title1: 'Test de rutas' });
});

module.exports = router;
