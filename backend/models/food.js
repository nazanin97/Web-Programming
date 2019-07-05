var mongoose = require('mongoose');

var FoodScheme = new mongoose.Schema({
	name: String,
	price: Number,
	description: String,
	foodSet: String
});

module.exports = mongoose.model('Food', FoodScheme);