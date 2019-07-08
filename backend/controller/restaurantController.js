const Restaurant = require('../models/restaurant');
const Food = require('../models/food');
const Category = require('../models/category');
const Address = require('../models/address');

function handleErrorData(error, data, res) {
    if (error) {
        res.status(400).send(error);
    } else {
        console.log(data);
        res.send(data);
    }
}

exports.getRestaurants = function (query, res) {
    let p = {
        'address.city': query.city,
        'address.area': query.area
    };
    if (query.categories && query.categories.length !== 0) {
        p['categories.name'] = {$in: query.categories}
    }
    Restaurant.find(p).exec((error, data) => handleErrorData(error, data, res));
};

exports.getRestaurantById = function (req, res) {
    Restaurant.findById(req.params.id)
        .exec((error, data) => handleErrorData(error, data, res));
};

exports.createRestaurant = function (req, res) {

    let requestBody = req.body

    console.log('Got request:')
    console.log(req3)

    console.log('Got body:')
    console.log(requestBody)

    let address = new Address({
        city: requestBody.address.city,
        area: requestBody.address.area,
        addressLine: requestBody.address.addressLine
    });

    let categories = requestBody.categories.map(category => new Category({
        name: category.name
    }));

    let foods = requestBody.foods.map(food => new Food({
        name: food.name,
        price: food.price,
        description: food.description,
        foodSet: food.foodSet
    }));

    let restaurant = new Restaurant({
        name: requestBody.name,
        logo: requestBody.logo,
        openingTime: requestBody.openingTime,
        closingTime: requestBody.closingTime,
        averageRate: requestBody.averageRate,
        address: address,
        categories: categories,
        foods: foods,
        comments: []
    });

    address.save()
        .then(() => Category.insertMany(categories))
        .then(() => Food.insertMany(foods))
        .then(() => restaurant.save())
        .then(
            () => res.send('Restaurant Created!'),
            err => handleErrorData(err, null, res)
        );

};

exports.getRestaurantComments = function (req, res) {
    Restaurant.findById(req.params.id)
        .sort('-created_at')
        .select('comments')
        .exec((error, data) => handleErrorData(error, data, res))
        .sort();
};


// const url = 'mongodb://localhost:27017/reyhoonDatabase';
// mongoose.connect(url, function (err, db) {
//  if (err) {
//    console.log('Unable to connect to the mongoDB server. Error:', err);
//  } else {
//    console.log('Connection established to', url);
//  }
// });

// mongoose.connect("mongodb://localhost/my_reyhoon", { useNewUrlParser: true });
// db.once("open", function() {
//   console.log("connection has been made!");
// });
// db.on("error", function(error){
// 	console.log('Connection error:', error);
// });

// exports.getRestaurants = function(req, res, next) {
	
// 	// r.find({$and:[{"address.city":req.city}, {"address.area":req.area}]}, function(err, data){
// 	// 	if (error) {
//  //        res.status(400).send(error);
//  //    	}
//  //    	else {
//  //        res.send(data);
//  //    	}
// 	// });
// };

// exports.addRestaurant = function(req, res) {
	// var restaurant = new r();
	// restaurant.id = req.id;
	// restaurant.name = req.name;
	// restaurant.logo = req.logo;
	// restaurant.openingTime = req.openingTime;
	// restaurant.closingTime = req.closingTime;


	// var r_address = new a();
	// r_address.id = req.address.id;
	// r_address.city = req.address.city;
	// r_address.area = req.address.area;
	// r_address.addressLine = req.address.addressLine;
	// restaurant.address = r_address;


	// var r_categories = [];
	// req.categories.forEach(function(entry){
	// 	new_category = new c();
	// 	new_category.id = entry.id;
	// 	new_category.name = entry.name;

	// 	r_categories.push(new_category);
	// });
	// restaurant.categories = r_categories;


	// var r_foods = [];
	// req.foods.forEach(function(entry){
	// 	new_food = new f();
	// 	new_food.id = entry.id;
	// 	new_food.name = entry.name;
	// 	new_food.price = entry.price;
	// 	new_food.description = entry.description;
	// 	new_food.foodSet = entry.foodSet;

	// 	r_foods.push(new_category);
	// });
	// restaurant.foods = r_foods;

	// r_address.save(function(err){
 //        if(err){
 //            res.status(400).send('db error');
 //        }
 //        else{
 //            r_categories.forEach(function(entry){
 //            	entry.save(function(err){
 //            		if (err) {
 //            			res.status(400).send('db error');
 //            		}
 //            	})
 //            });
 //            r_foods.forEach(function(entry){
 //            	entry.save(function(err){
 //            		if (err) {
 //            			res.status(400).send('db error');
 //            		}
 //            	})
 //            });
 //            restaurant.save(function(err){
 //                if(err){
 //                    res.status(400).send('db error');
 //                } 
 //            });
 //        }
 //    });
// };

// exports.getRestaurantInfo = function(req, res) {
	// r.find({id:req.id}, function (error, data) {
 //        if (error) {
 //        res.status(400).send(error);
 //    	}
 //    	else {
 //        res.send(data);
 //    	}
 //    });
// };

// exports.getComments = function(req, res) {
	// r.find(id:req.id).sort({comments.create_at: -1}, function(err, data){
	// 	if (error) {
 //        res.status(400).send(error);
 //    	}
 //    	else {
 //        res.send(data);
 //    	}
	// });
// };
