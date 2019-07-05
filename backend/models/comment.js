var mongoose = require('mongoose');

var CommentScheme = new mongoose.Schema({
	author: String,
	quality: {
		type: Number,
		max: 5,
		min: 0
	},
	packaging: Number,
	deliveryTime: Number,
	text: String,
	create_at: Date
});

module.exports = mongoose.model('Comment', CommentScheme);