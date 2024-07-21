// if/else
let totalBelanja = 80000;

if (totalBelanja > 100000) {
  // console.log("Selamat anda dapat hadiah!")
} else {
  // console.log("Maaf anda kurang beruntung")
}
// console.log("Terimakasih sudah belanja") ctrl + /

// Percabangan Ternary
// const cekTotalBelanja =
//   totalBelanja > 100000
//     ? console.log("Selamat anda dapat")
//     : totalBelanja < 100000
//     ? console.log("Maaf anda kurang beruntung")
//     : console.log("error");

// if/else/if
let nilai = 90;

// if (nilai > 85) {
//   console.log("Grade A");
// } else if (nilai > 70) {
//   console.log("Grade B");
// } else {
//   console.log("error");
// }

// switch case
switch (true) {
  case nilai > 85:
    // console.log("Grade A");
    break;
  case nilai > 70:
    // console.log("Grade B");
    break;
  default:
    // console.log("error");
    break;
}

let namaHari = "Selasa";

switch (namaHari) {
  case "Senin":
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    // console.log("Hari Kerja");
    break;
  default:
    // console.log("Weekend");
    break;
}

// if (
//   namaHari === "Senin" ||
//   namaHari === "Selasa" ||
//   namaHari === "Rabu" ||
//   namaHari === "Kamis" ||
//   namaHari === "Jumat"
// ) {
//   console.log("Hari Kerja");
// }

// let stringBulan = "Juni";
// switch (true) {
//   case stringBulan === "Juni":
//     console.log("Juni");
//     break;
//   case stringBulan === "Juli":
//     console.log("Juli");
//     break;
//   default:
//     break;
// }

let username = "lala lili"; // nilai dari variable adalah string kosong
let password = "12345";

switch (username) {
  case username:
    if (password.length > 5) {
      console.log("Selamat datang");
    } else {
      console.log("Periksa password anda!");
    }
    break;

  default:
    console.log("Periksa kembali username anda!");
    break;
}
