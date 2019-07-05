var express = require('express');
var app1 = express();
var r = require('../controller/restaurantController');
var c = require('../controller/commentController');

app1.get('/', function (req, res, next){
	r.getRestaurants(req.query, res);
})

app1.post('/', function (req, res, next) {
   r.addRestaurant(req.body, res);
})

app1.get('/:id', function (req, res, next){
	r.getRestaurantInfo(req, res);
})

app1.get('/:id/comments', function (req, res, next){
	r.getComments();
})

app1.post('/:id/comments', function (req, res, next) {
   c.addComment(req, res);
})

