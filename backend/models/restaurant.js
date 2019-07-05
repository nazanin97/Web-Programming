var mongoose = require('mongoose');
var Addresss = require('./address')
var Category = require('./category')
var Food = require('./food')
var Comment = require('./comment')

var RestaurantScheme = new mongoose.Schema({
	name: String,
	logo: String,
	openingTime: Number,
	closingTime: Number,
	averageRate: Number,
	address: mongoose.model('Address').schema,
    categories: [mongoose.model('Category').schema],
    foods: [mongoose.model('Food').schema],
    comments: [mongoose.model('Comment').schema]
});

module.exports = mongoose.model('Restaurant', RestaurantScheme);