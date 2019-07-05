var mongoose = require('mongoose');

var CategoryScheme = new mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Category', CategoryScheme);