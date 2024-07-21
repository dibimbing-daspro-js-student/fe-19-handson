const _ = require('lodash')

const students = ["Bayu", "Aldy", "Dhika"];
const fruits = [
  {
    name: "Apple",
    color: "red",
    enak: true,
  },
  {
    name: "Grape",
    color: "green",
    enak: false,
  },
  {
    name: "Orange",
    color: "orange",
    enak: false,
  },
];

// Lodash map
// _.map(students, (student) => console.log(student));

_.map(fruits, (fruit) => {
  console.log(`${fruit.name}: ${fruit.color}`);
});

const fruitName = _.map(fruits, "color");
console.log(fruitName);

console.log("============================================");

// Lodash filter
const filterEnak = fruits.filter((f) => !f.enak);
console.log(filterEnak);

const filterEnakSimple = _.filter(fruits, "enak");
console.log(filterEnakSimple);
