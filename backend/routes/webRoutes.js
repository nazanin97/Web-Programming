var express = require('express');
var app = express();
var r = require('../controllers/restaurantController');
var c = require('../controllers/commentController');

app.get('/', function (req, res){
	r.getRestaurants(req, res);
})

app.post('/', function (req, res) {
   r.addRestaurant(req, res);
})

app.get('/:id', function (req, res){
	r.getRestaurantInfo(req, res);
})

app.get('/:id/comments', function (req, res){
	c.getComments();
})

app.post('/:id/comments', function (req, res) {
   c.addComment(req, res);
})

