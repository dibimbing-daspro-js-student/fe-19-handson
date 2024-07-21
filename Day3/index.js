var piring = 17;
var name = "Ihsan";
var age = 20;

var firstName = "Muhammad",
  lastName = "Ihsanuddienullah";
// console.log(firstName, lastName)

var title = 20;
title = "Ihsan";

// nama variabel tidak bisa menggunakan awalan angka
var title2 = "Belajar Javascript";

// nama variabel bisa menggunakan awalan underscores
var _title3 = "Belajar Javascript";

// nama variabel jika lebih dari satu suku kata maka suku kata berikutnya disarankan untuk menggunakan huruf kapital
var schoolName = "SMAN 20 Jakarta";

// nama variabel dianjurkan untuk menggunakan bahasa inggris
var address = "Bandung";

// console.log(title2 + " Bareng " + lastName)

// var: seharusnya kita tidak usah mendeklarasikan lagi variable age, karena kita sudah mendeklarasikan variable tersebut di baris ke-3
if (age === 20) {
  var age = 35;
}

// let: pada tipe variable let bersifat block
let officeName = "Dibimbing";

if (age === 35) {
  let officeName = "Google";
  // console.log(officeName)
}

officeName = "Yahoo";
// console.log(officeName) // akan muncul "Yahoo"

// const: nilai variable tidak bisa dirubah
const parentName = "Agus";
const urlFacebook = "http://facebook.com";

// variabel const tidak bisa dirubah
// parentName = "Budi"

// Array dalam JS bertipe data object
const studentName = ["Ihsan", "Dika"];
// console.log(typeof studentName)

const student = {
  name: "Budi Sudarsono",
  age: 20,
  address: "Surabaya",
  child: {
    name: "Rudi",
  },
};

student.name = "Bima Sudarsono";
// console.log(student.name)
// console.log(student.child.name)

let angka1 = 5;
let angka2 = 10;

// OPERATOR ANGKA
let jumlahAngka = angka1 + angka2;
let penguranganAngka = angka1 - angka2;
// console.log(jumlahAngka)

let perkalianAngka = angka1 * angka2;
let pembagianAngka = angka1 / angka2;

let eksponensial = angka1 ** 2;
// console.log(eksponensial)

// OPERATOR LOGIKA
let hasilAND = angka1 > 6 && angka2 < 12; // operator && bernilai true ketika kedua perbandingan bernilai true
let hasilOR = angka1 > 6 || angka2 < 12; // operator || bernilai true ketika salah satu bernilai true
let hasilNOT = !hasilOR; // operator ! bernilai kebalikan

let hasilKompleks = angka1 > 6 && (angka2 < 12 || (angka1 < 5 && angka2 < 6));
// console.log(hasilKompleks);

// console.log(
//   `hasilAND = ${hasilAND}, hasilNOT = ${hasilNOT}, hasilOR = ${hasilOR}`
// );

// OPERATOR PENUGASAN
angka1 = angka1 + 4 // sama dengan angka += 4

let totalFor = 0
for (let index = 0; index < 9; index++) {
    totalFor += 2
    // console.log(index)
}

let index = 0
let total = 0
do {
    total += 2
    index++
} while (index < angka1);

console.log(`total = ${total}, index = ${index}`)