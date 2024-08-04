// PENCARIAN INDEX
// indexOf, cocok untuk mencari array data yang sederhana
const fruits = ["apple", "orange", "grape", "banana", "grape"];
const foundIndex = fruits.indexOf("grape");
// console.log(foundIndex);

const foundIndexOfMango = fruits.indexOf("Manggo");
// console.log(foundIndexOfMango);

// findIndex, cocok untuk mencari array data yang kompleks
const fruitsOfObjects = [
  { name: "apple", price: 1000 },
  { name: "orange", price: 2000 },
  { name: "grape", price: 2500 },
  { name: "banana", price: 3000 },
];

function callbackFindIndex(fruit) {
  //   console.log("fruit" + fruit);
  return fruit.name === "grape";
}

const foundIndexOfGrape = fruitsOfObjects.findIndex(callbackFindIndex);
// console.log("found index of grape: " + foundIndexOfGrape);

const foundIndexOfPrice = fruitsOfObjects.findIndex(
  (fruit) => fruit.price === 2000
);
// console.log("found index of price: " + foundIndexOfPrice);

// indexOf tidak cocok digunakan untuk mencari data array of objects
const indexOfArrayObjects = fruitsOfObjects.indexOf({
  name: "grape",
  price: 2500,
});
// console.log("index of array objects with indexOf: " + indexOfArrayObjects);

// PENCARIAN DATA
// find
const numbers = [5, 8, 2, 10, 15, 22];
const foundData = numbers.find((number) => number > 10);
// console.log("found data: " + foundData);

// filter
const filteredData = numbers.filter((number) => number < 10);
// console.log("filtered data: " + filteredData);

const filteredFruits = fruitsOfObjects.filter((fruit) => fruit.price <= 2500);
// console.log(filteredFruits.map((fruit) => fruit.name));

// includes, cocok hanya untuk array sederhana
const names = ["Budi", "Agus", "Doni", "Arif"];
const isNamesIncluded = names.includes("Agus");
console.log(isNamesIncluded);

if (isNamesIncluded) {
  //   console.log("Doni is included");
}

const isObjectsIncluded = fruitsOfObjects.some(
  (fruit) => fruit.name === "banana"
);
// console.log(isObjectsIncluded);
