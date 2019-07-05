var mongoose = require('mongoose');

var CommentScheme = new mongoose.Schema({
	id: String,
	author: String,
	quality: {
		type: Number;
		max: 5,
		min: 0
	},
	packaging: Number,
	deliveryTime: Number,
	text: String,
	create_at: Number
});

module.exports = mongoose.model('comment', CommentScheme);
// module.exports = {
//     schema: CommentScheme,
//     model: mongoose.model('Comment', CommentScheme)
// };