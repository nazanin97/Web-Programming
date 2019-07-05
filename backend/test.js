var express = require('express');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
// const parseurl = require('parseurl');
// const mongoose = require('mongoose');
// const r = require('./models/restaurant.js');
const url = 'mongodb://localhost:27017/signatures';
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});
var t = express();

t.set('view engine', 'ejs');
t.set('views', path.join(__dirname, 'views'));

t.use(bodyParser());

// t.get('/', function(req, res){
// 	// res.render('h');
// });

t.get('/', function (req, res){

	res.send('hello world!');
	//r.getRestaurants(req.query, res);
})

t.post('/', function (req, res) {
   // r.addRestaurant(req.body, res);
})

t.get('/:id', function (req, res){
	// r.getRestaurantInfo(req, res);
})

t.get('/:id/comments', function (req, res){
	// r.getComments();
})

t.post('/:id/comments', function (req, res) {
   // c.addComment(req, res);
})

t.listen(3002, function(){
	console.log('ready');
})