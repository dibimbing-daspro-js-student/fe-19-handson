function f1() {
  console.log("f1");
}

function f2() {
  setTimeout(() => {
    console.log("f2");
  }, 0);
}

function f3() {
  console.log("f3");
}

// f1();
// f2();
// f3();

const login = (callback) => {
  console.log("user menginputkan nama");
  console.log("user menginputkan password");
  console.log("validasi login ...");
  setTimeout(() => {
    callback({ alamat: "Jawa Timur" });
  }, 5000);
};

login((dataUser) => {
  console.log(dataUser);
});
