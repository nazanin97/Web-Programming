var mongoose = require('mongoose');

var AddressScheme = new mongoose.Schema({
	city: String,
	area: String,
	addressLine: String
});

module.exports = mongoose.model('Address', AddressScheme);