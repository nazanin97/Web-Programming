const r = require('../models/restaurant').model;
const f = require('../models/food').model;
const c = require('../models/category').model;
const a = require('../models/address').model;

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/my_reyhoon", { useNewUrlParser: true });
// const db = mongoose.connection;
// db.once("open", function() {
//   console.log("connection has been made!");
// });
// db.on("error", function(error){
// 	console.log('Connection error:', error);
// });


// db.r.insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
  
//   });
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { 
	id: "123",
	name: "nana", 
	logo: "123",
	openingTime: 10, 
	closingTime: 20,
	averageRate: 3,
	address: {
		id:"1",
		city: "tehran",
		area: "zafar",
		addressLine:"..."
	},
	foods: [{
		id: "2",
		name: "foodName",
		price: "30",
		description: 1,
		foodSet: 2
	},
	{
		id: "3",
		name: "foodName2",
		price: "40",
		description: 4,
		foodSet: 7
	}
	],
	comments: [{
		id: "c1",
	author: "a1",
	quality: 3,
	packaging: 22,
	deliveryTime: 29,
	text: "text",
	create_at: 70
	}]
};
r.find({id:req.id}, function (error, data) {
        if (error) {
        res.status(400).send(error);
    	}
    	else {
        res.send(data);
    	}
    });
  dbo.collection("restaurant").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});