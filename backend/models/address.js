var mongoose = require('mongoose');

var AddressScheme = new mongoose.Schema({
	id: String,
	city: String,
	area: String,
	addressLine: String,
});

module.exports = mongoose.model('address', AddressScheme);