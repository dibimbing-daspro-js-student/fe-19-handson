// For Loop
for (let index = 0; index < 7; index++) {
  //   console.log("Index ke " + index);
}

// While Loop
let index = 1;
while (index < 1) {
  //   console.log("Index ke " + index);
  index++;
}

// Do While loop
let index2 = 10;
do {
  // console.log("Index ke " + index2);
  index2--;
} while (index2 > 1);

// For in Loop
const person = {
  name: "John",
  age: 20,
  profession: "Developer",
};

// console.log(person.name)
// console.log(person['name'])

for (const properti in person) {
    // console.log(`${properti}: ${person[properti]}`);
}

// For of Loop
const fruits = ["Apple", "Orange", "Mango"];
for (const x of fruits) {
    console.log(x)
}

// For each Loop
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat", "Sun"]
days.forEach(function (day, index) {
    // console.log("Index ke " + index + " : " + day);
})
