const names = ["Budi", "budi", "agus", "doni", "Doni"];
// console.log(names.sort());

const numbers = [2, 5, 1, 9, 4, 6];
// console.log(numbers.sort());

const complexNumbers = [2, 10, 4, 6, 12];
const sortedNumbers = complexNumbers.sort((a, b) => b - a);
// console.log(sortedNumbers);

const simpleNumbers = [1, 2];
const inputUser = "Descending";
const sortedSimpleNumbers = simpleNumbers.sort((a, b) => {
  if (inputUser === "Ascending") {
    return a - b;
  } else {
    return b - a;
  }
});
// console.log(sortedSimpleNumbers);

const people = [
  { name: "John Mayer", age: 21, birthDate: new Date() },
  { name: "Alices Wonderland", age: 12, birthDate: new Date("12-5-1998") },
  { name: "Budi Heru", age: 91, birthDate: new Date("10-5-1995") },
  { name: "Ari Setiadi", age: 30, birthDate: new Date("5-5-2002") },
];
const newArray = people.slice().sort((a, b) => a.age - b.age);
// console.log(people);
// console.log(newArray);

// console.log(people.sort((a, b) => a.name.localeCompare(b.name)));
console.log(people.sort((a, b) => a.birthDate - b.birthDate));
