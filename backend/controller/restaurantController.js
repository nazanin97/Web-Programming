const r = require('../models/restaurant');
const f = require('../models/food');
const c = require('../models/category');
const a = require('../models/address');

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/my_reyhoon", { useNewUrlParser: true });

db.once("open", function() {
  console.log("connection has been made!");
});
db.on("error", function(error){
	console.log('Connection error:', error);
});

export.getRestaurants() = function(req, res, next) {
	
	r.find({$and:[{"address.city":req.city}, {"address.area":req.area}]}, function(err, data){
		if (error) {
        res.status(400).send(error);
    	}
    	else {
        res.send(data);
    	}
	});
};

export.addRestaurant() = function(req, res, next) {
	var restaurant = new r();
	restaurant.id = req.id;
	restaurant.name = req.name;
	restaurant.logo = req.logo;
	restaurant.openingTime = req.openingTime;
	restaurant.closingTime = req.closingTime;


	var r_address = new a();
	r_address.id = req.address.id;
	r_address.city = req.address.city;
	r_address.area = req.address.area;
	r_address.addressLine = req.address.addressLine;
	restaurant.address = r_address;


	var r_categories = [];
	req.categories.forEach(function(entry){
		new_category = new c();
		new_category.id = entry.id;
		new_category.name = entry.name;

		r_categories.push(new_category);
	});
	restaurant.categories = r_categories;


	var r_foods = [];
	req.foods.forEach(function(entry){
		new_food = new f();
		new_food.id = entry.id;
		new_food.name = entry.name;
		new_food.price = entry.price;
		new_food.description = entry.description;
		new_food.foodSet = entry.foodSet;

		r_foods.push(new_category);
	});
	restaurant.foods = r_foods;

	r_address.save(function(err){
        if(err){
            res.status(400).send('db error');
        }
        else{
            r_categories.forEach(function(entry){
            	entry.save(function(err){
            		if (err) {
            			res.status(400).send('db error');
            		}
            	})
            });
            r_foods.forEach(function(entry){
            	entry.save(function(err){
            		if (err) {
            			res.status(400).send('db error');
            		}
            	})
            });
            restaurant.save(function(err){
                if(err){
                    res.status(400).send('db error');
                } 
            });
        }
    });
};

export.getRestaurantInfo() = function(req, res, next) {
	r.find({id:req.id}, function (error, data) {
        if (error) {
        res.status(400).send(error);
    	}
    	else {
        res.send(data);
    	}
    });
};

export.getComments() = function(req, res, next) {
	r.find(id:req.id).sort({comments.create_at: -1}, function(err, data){
		if (error) {
        res.status(400).send(error);
    	}
    	else {
        res.send(data);
    	}
	});
};