var mongoose = require('mongoose');

var RestaurantScheme = new mongoose.Schema({
	id: String,
	name: String,
	logo: String,
	openingTime: Number,
	closingTime: Number,
	averageRate: Number,
	address: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'address'
	},
	categories: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'category'
	}],
	foods: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'food'
	}],
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'comment'
	}],
	
});

module.exports = mongoose.model('restaurant', RestaurantScheme);