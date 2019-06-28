var mongoose = require('mongoose');

var CategoryScheme = new mongoose.Schema({
	id: String,
	name: String,
});

module.exports = mongoose.model('category', CategoryScheme);