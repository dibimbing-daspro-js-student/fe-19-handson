function f1() {
  console.log("f1");
}

function f2() {
  console.log("start f2");
  setTimeout(function () {
    console.log("f2");
  }, 2000);
}

function f3() {
  console.log("f3");
}

// f1();
// f2();
// f3();

function login(callback) {
  console.log("user input name");
  console.log("user input password");
  console.log("validasi data");
  setTimeout(function () {
    callback({ alamat: "Kediri" });
  }, 3000);
}

login((value) => {
  console.log(value);
});
