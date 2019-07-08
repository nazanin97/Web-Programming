const mongoose = require('mongoose');
const restaurant = require('./restaurant').model;
const comment = require('./comment').model;

mongoose.connect("mongodb://localhost:27017/reyhoonDatabase", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database Error!"));
db.once("open", function() {
  console.log("Database is alive!");
});

let ch1 = new Chapter({
    name: 'Chapter 1',
    keys: ['1', '2', '3']
});

let ch2 = new Chapter({
    name: 'Chapter 2',
    keys: ['10', '13', '12', '11', '15']
});

let ch3 = new Chapter({
    name: 'Chapter 3',
    keys: []
});

let book1 = new Book({
    name: 'Book 1',
    chapters: [ch1, ch2, ch3],
    tags: ['tags', 'are', 'useless']
});
book1.markModified('chapters');

let ch4 = new Chapter({
    name: 'Chapter 4',
    keys: ['20', '21', '25', '29', '26']
});

let book2 = new Book({
    name: 'Book 2',
    chapters: [ch3, ch4],
    tags: ['tags', 'are', 'good']
});
book2.markModified('chapters');


Chapter.insertMany([ch1, ch2, ch3, ch4]).then(() => console.log('Saved both!'), err => console.log(err));
// Chapter.insertOne({name: "nana", keys:["1", "2"]});
Book.insertMany([book1, book2]).then(() => console.log('Saved both!'), err => console.log(err));
// book1.save().then(() => book2.save()).then(() => console.log('Saved both!'), err => console.log(err));

// Book.find({}).exec((err, data) => console.log(data))
// Chapter.find({}).exec((err, data) => console.log(data))
// Book.remove({}, () => console.log('Removed!')); Chapter.remove({}, () => console.log('Removed!'));
//

var f = (err, data) => {
    console.log(data);
};
console.log("1:");
Book.findOne({'chapters.name':  {$in: ['Chapter 1']}}).select('name chapters').exec(f);
console.log("2:");
Book.findOne({'chapters.keys':  {$in: ['20']}}).select('name chapters').exec(f);
console.log("3:");


