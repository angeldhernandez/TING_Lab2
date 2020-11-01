var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// adhernandez 20/10/20
var serviciosRouter = require('./routes/servicios');
var dbRouter = require('./routes/db');
var db2Router = require('./routes/db2');
var accionRouter = require('./routes/db2/accion');
var dramaRouter = require('./routes/db2/drama');
var ficcionRouter = require('./routes/db2/ficcion');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/servicios', serviciosRouter);
app.use('/db', dbRouter);
app.use('/db2', db2Router);
app.use('/db2/accion', accionRouter);
app.use('/db2/drama', dramaRouter);
app.use('/db2/ficcion', ficcionRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
