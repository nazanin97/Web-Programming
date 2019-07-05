var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var myRouter = require('./routes/webRoutes');

var cors = require('cors');
var app = express();

///////////
// const router = express.Router();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// mongoose.connect('mongodb://localhost:27017/reyhoonDatabase', {useNewUrlParser: true});
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'error:'));
// db.once('open', function() {
//   //connection successful
// });
// const url = 'mongodb://localhost:27017/reyhoonDatabase';
// mongoose.connect(url, function (err, db) {
//  if (err) {
//    console.log('Unable to connect to the mongoDB server. Error:', err);
//  } else {
//    console.log('Connection established to', url);
//  }
// });
mongoose.connect("mongodb://localhost/reyhon", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database Error!"));
db.once("open", function() {
     console.log('Connection established');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/restaurants', myRouter);
// indexRouter.initialize(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

app.use(cors());

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
