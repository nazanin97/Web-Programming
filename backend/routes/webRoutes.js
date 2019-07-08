var express = require('express');
var app1 = express.Router();

var r = require('../controller/restaurantController');
var c = require('../controller/commentController');

app1.get('/', function (req, res, next){
	console.log('Hello')
	console.log(req.query)
	r.getRestaurants(req.query, res);
});

app1.post('/', function (req, res) {
   r.createRestaurant(req, res);
});

app1.get('/:id', function (req, res){
	r.getRestaurantById(req, res);
});

app1.get('/:id/comments', function (req, res){
	r.getRestaurantComments(req, res);
});

app1.post('/:id/comments', function (req, res) {
   c.addComment(req, res);
});
module.exports = app1;

