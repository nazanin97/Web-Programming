var mongoose = require('mongoose');

var FoodScheme = new mongoose.Schema({
	id: String,
	name: String,
	price: String,
	description: Number,
	foodSet: Number,
});

module.exports = mongoose.model('food', FoodScheme);