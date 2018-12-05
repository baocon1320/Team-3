var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// For authorize
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var accountRouter = require('./routes/account');
var generalRouter = require('./routes/general');
var itemRouter = require('./routes/item');
var orderRouter = require('./routes/order');
var categoryRouter = require('./routes/category');
var manufacturerRouter = require('./routes/manufacturer');
var addressRouter = require('./routes/address');
var itemOrderFKsRouter = require('./routes/itemorderfks');
var authRouter = require('./routes/auth');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// for authorize
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/general', generalRouter);
app.use('/item', itemRouter);
app.use('/order', orderRouter);
app.use('/category', categoryRouter);
app.use('/manufacturer', manufacturerRouter);
app.use('/address', addressRouter);
app.use('/itemOrderFKs', itemOrderFKsRouter);
app.use('/auth', authRouter);

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

// CORS middleware for authorize
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)

module.exports = app;
