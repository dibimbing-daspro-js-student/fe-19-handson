let namaStudents = ["Dhika", "Ihsan", "Bimo"];

// Push
namaStudents.push("Rudi");
console.log(namaStudents);

// Unshift
namaStudents.unshift("Yudi");
console.log(namaStudents);

// Shift
namaStudents.shift();
console.log(namaStudents);

// Pop
namaStudents.pop();
console.log(namaStudents);

// Ganti isi array
namaStudents[1] = "Doni";
console.log(namaStudents);

// Mencari index
const indexArray = namaStudents.indexOf("Bimo");
console.log("index dari Bimo adalah " + indexArray);

// Menambah data ditengah
namaStudents.splice(2, 0, "Cika", "Budi");
console.log(namaStudents);

// Menghapus data ditengah
namaStudents.splice(3, 1);
console.log(namaStudents);

// array 2 dimensi
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array2D[2][1]);
