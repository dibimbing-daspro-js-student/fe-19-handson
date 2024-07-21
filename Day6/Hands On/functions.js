function drawCircle() {
  //   console.log("drawing a circle");
}

// function greet with parameter
function greet(name) {
  //   console.log("greetings " + name);
}

greet("Ihsan");
greet("Doni");

// function sum with parameter
function add(a, b) {
  let sum = a + b;
  return sum;
}

let total = add(1, 2);
// console.log("total: " + total);

let totalNilai = add(30);
// console.log("total nilai: " + totalNilai);

let totalSemuaNilai = totalNilai + total;

kelilingPersegiPanjang(2, 5);
function kelilingPersegiPanjang(a, b) {
  const keliling = a * b;
  //   console.log("keliling persegi panjang: " + keliling);
}

// Arrow Functions
const tebakNama = (nama) => {
  let namaLengkap;
  if (nama === "Ihsan") {
    namaLengkap = "Muhammad Ihsan";
  } else {
    namaLengkap = "Gajelas";
  }

  return namaLengkap;
};

let tebakNamaLengkap = tebakNama("Ihsan");
// console.log("nama lengkap: " + tebakNamaLengkap);

// Arrow functions dengan 1 baris kode
const add2 = (a, b) => a + b;

// Callback functions
const totalPenjumlahan = (a, b, callback) => {
  let sum = add(a, b);
  callback(sum);
};

const tampilkanPenjumlahan = (jumlah) => {
  console.log("tampilan penjumlahan " + jumlah);
};

totalPenjumlahan(2, 8, tampilkanPenjumlahan);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const hasilMap = (item) => {
  console.log(item);
};

const hasilFilter = (item) => {
  return item === 1;
};

console.log(array.filter(hasilFilter));
