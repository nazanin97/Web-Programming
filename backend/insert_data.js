const mongoose = require('mongoose');

const Address = require('./models/address')
const Category = require('./models/category')
const Comment = require('./models/comment')
const Food = require('./models/food')
const Restaurant = require('./models/restaurant')

mongoose.connect("mongodb://localhost/reyhon", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database Error!"));
db.once("open", function() {
  console.log("Database is alive!");
});

let ad0 = new Address({
    city: 'قزوین',
    area: 'اول',
    addressLine: 'قزوین منطقه اول'
})

let ad11 = new Address({
    city: 'تهران',
    area: 'اول',
    addressLine: 'تهران منطقه اول ۱'
})

let ad12 = new Address({
    city: 'تهران',
    area: 'اول',
    addressLine: 'تهران منطقه اول ۲'
})

let ad13 = new Address({
    city: 'تهران',
    area: 'اول',
    addressLine: 'تهران منطقه اول ۳'
})

let ad14 = new Address({
    city: 'تهران',
    area: 'اول',
    addressLine: 'تهران منطقه اول ۴'
})

let ad21 = new Address({
    city: 'تهران',
    area: 'دوم',
    addressLine: 'تهران منطقه دوم ۱'
})

let ad22 = new Address({
    city: 'تهران',
    area: 'دوم',
    addressLine: 'تهران منطقه دوم ۲'
})

let ad31 = new Address({
    city: 'تهران',
    area: 'سوم',
    addressLine: 'تهران منطقه سوم ۱'
})

let cat1 = new Category({
    name: 'پیتزا'
})

let cat2 = new Category({
    name: 'پاستا'
})

let cat3 = new Category({
    name: 'ساندویچ'
})

let cat4 = new Category({
    name: 'برگر'
})

let cat5 = new Category({
    name: 'کباب'
})

let cat6 = new Category({
    name: 'خورشت'
})

let cat7 = new Category({
    name: 'ایرانی'
})

let cat8 = new Category({
    name: 'خارجی'
})
let cat9 = new Category({
    name: 'گیاهی'
})

let pizza1 = new Food({
   name: 'پیتزا ۱',
   price: 20000, 
   description: 'توضیح',
   foodSet: 'پیتزا'
})
let pizza2 = new Food({
    name: 'پیتزا ۲',
    price: 22000, 
    description: 'توضیح',
    foodSet: 'پیتزا'
 })
let pizza3 = new Food({
    name: 'پیتزا ۳',
    price: 23000, 
    description: 'توضیح',
    foodSet: 'پیتزا'
 })
 let pizza4 = new Food({
    name: 'پیتزا ۴',
    price: 23000, 
    description: 'توضیح',
    foodSet: 'پیتزا'
 })

let past1 = new Food({
    name: 'پاستا ۱',
    price: 24000, 
    description: 'توضیح',
    foodSet: 'پاستا'
 })
let past2 = new Food({
    name: 'پاستا ۲',
    price: 34000, 
    description: 'توضیح',
    foodSet: 'پاستا'
 })
let past3 = new Food({
    name: 'پاستا ۳',
    price: 28000, 
    description: 'توضیح',
    foodSet: 'پاستا'
 })

 let kebab1 = new Food({
    name: 'چلوکباب',
    price: 24000, 
    description: 'توضیح',
    foodSet: 'کباب'
 })
 let kebab2 = new Food({
    name: 'جوجه‌کباب',
    price: 28000, 
    description: 'توضیح',
    foodSet: 'کباب'
 })

 let irani1 = new Food({
    name: 'قیمه',
    price: 14000, 
    description: 'توضیح',
    foodSet: 'خورشت'
 })
 let irani2 = new Food({
    name: 'قورمه',
    price: 14000, 
    description: 'توضیح',
    foodSet: 'خورشت'
 })
 let irani3 = new Food({
    name: 'کتلت',
    price: 14000, 
    description: 'توضیح',
    foodSet: 'خورشت'
 })
 
 let com1 = new Comment({
    author: 'نام',
    quality: 2,
    packaging: 1,
    deliveryTime: 4,
    text: 'توضیح کامنت',
    create_at: new Date()
 })
 
 let com2 = new Comment({
    author: 'نام',
    quality: 2,
    packaging: 1,
    deliveryTime: 3,
    text: 'توضیح کامنت',
    create_at: new Date()
 })
 
 let com3 = new Comment({
    author: 'نام',
    quality: 2,
    packaging: 1,
    deliveryTime: 5,
    text: 'توضیح کامنت',
    create_at: new Date()
 })

 let rest0 = new Restaurant({
     name: 'رستوران ۰',
     logo: '',
     openingTime: 0,
     closingTime: 24,
     averageRate: 4.3,
     address: ad0,
     categories: [cat8, cat9],
     foods: [],
     comments: [com1, com2, com3]
 })

 let rest11 = new Restaurant({
    name: 'رستوران ۱۱',
    logo: '',
    openingTime: 0,
    closingTime: 24,
    averageRate: 4.3,
    address: ad11,
    categories: [cat4, cat6, cat7],
    foods: [kebab1, kebab2, irani1, irani2],
    comments: [com1, com2, com3]
})

let rest12 = new Restaurant({
    name: 'رستوران ۱۲',
    logo: '',
    openingTime: 0,
    closingTime: 24,
    averageRate: 3.4,
    address: ad12,
    categories: [cat4, cat6, cat7],
    foods: [kebab1, kebab2, irani1, irani2, irani3],
    comments: [com1, com2, com3]
})

let rest13 = new Restaurant({
    name: 'رستوران ۱۳',
    logo: '',
    openingTime: 12,
    closingTime: 18,
    averageRate: 2.3,
    address: ad13,
    categories: [cat6, cat7],
    foods: [irani1, irani2, irani3],
    comments: [com1, com2, com3]
})

let rest14 = new Restaurant({
    name: 'رستوران ۱۴',
    logo: '',
    openingTime: 9,
    closingTime: 21,
    averageRate: 4.7,
    address: ad14,
    categories: [cat5],
    foods: [kebab1, kebab2],
    comments: [com1, com2, com3]
})

let rest21 = new Restaurant({
    name: 'رستوران ۲۱',
    logo: '',
    openingTime: 0,
    closingTime: 24,
    averageRate: 4.6,
    address: ad12,
    categories: [cat1],
    foods: [pizza1, pizza2, pizza3, pizza4],
    comments: [com1, com2, com3]
})
 
let rest22 = new Restaurant({
    name: 'رستوران ۲۲',
    logo: '',
    openingTime: 0,
    closingTime: 24,
    averageRate: 4.6,
    address: ad13,
    categories: [cat1, cat2, cat3, cat4],
    foods: [pizza1, past1, past2, past3],
    comments: [com1, com2, com3]
})
 
Address.insertMany([ad0, ad11, ad12, ad13, ad14, ad21, ad22, ad31]).then(() => console.log('Saved all!'), err => console.log(err))
Category.insertMany([cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9]).then(() => console.log('Saved all!'), err => console.log(err))
Comment.insertMany([com1, com2, com3]).then(() => console.log('Saved all!'), err => console.log(err))
Food.insertMany([pizza1, pizza2, pizza3, pizza4, past1, past2, past3, kebab1, kebab2, irani1, irani2, irani3]).then(() => console.log('Saved all!'), err => console.log(err))
Restaurant.insertMany([rest0, rest11, rest12, rest13, rest14, rest21, rest22]).then(() => console.log('Saved all!'), err => console.log(err))

// Address.remove({}).exec((err, data) => console.log('Removed!'))
// Cateogry.remove({}).exec((err, data) => console.log('Removed!'))
// Comment.remove({}).exec((err, data) => console.log('Removed!'))
// Food.remove({}).exec((err, data) => console.log('Removed!'))
// Restaurant.remove({}).exec((err, data) => console.log('Removed!'))

Address.find({}).exec((err, data) => console.log(data))
Restaurant.find({}).exec((err, data) => console.log(data))
Restaurant.findOne({_id: '5d1f72f2d95f38666bf49e05'}).exec((err, data) => console.log(data))
Restaurant.findById('5d204053846a3ee2866b74ca').exec((err, data) => console.log(data))