const Restaurant = require('../models/restaurant');
const Comment = require('../models/comment');

exports.addComment = function(req, res) {

	let requestBody = req.body
	let restaurantId = req.params.id 

    let com = new Comment({
        author: requestBody.author,
        quality: requestBody.quality,
        packaging: requestBody.packaging,
        deliveryTime: requestBody.deliveryTime,
        text: requestBody.text,
        created_at: requestBody.created_at
    })
    com.save().then(() => {
        Restaurant.findById(restaurantId)
            .exec((error, data) => {
                if (error) {
                    res.status(400).send(error)
                } else {
                    data.comments.push(com);
                    data.save().then(() => res.send(data), err => res.status(400).send(err))
                }
            });
    });

}
