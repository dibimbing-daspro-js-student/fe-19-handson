function f1(callback) {
  setTimeout(() => {
    return { alamat: "Kediri" };
  }, 1000);
}

function f2(callback) {
  setTimeout(() => {
    return "31 Agustus 2024";
  }, 1000);
}

function f3(callback) {
  setTimeout(() => {
    return "No 2";
  }, 1000);
}

f1(() => {
  f2(() => {
    f3(() => {
      console.log("callback hell selesai");
    });
  });
});
