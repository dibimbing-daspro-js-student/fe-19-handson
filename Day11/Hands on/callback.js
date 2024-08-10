// cari alamat detail user. Provinsi -> kota -> jalan no

const login = (callback) => {
  console.log("user menginputkan nama");
  console.log("user menginputkan password");
  console.log("validasi login ...");
  setTimeout(() => {
    callback({ province: "Jawa Timur" });
  }, 5000);
};

const getUserCity = (propinsi, callback) => {
  setTimeout(() => {
    const city = propinsi === "Jawa Timur" ? "Surabaya" : "Kota Lain";
    callback(city);
  }, 3000);
};

const getDetailUserAddress = (city, province, callback) => {
  setTimeout(() => {
    const detailAddress = `Jl Pahlawan No 2, ${city}, ${province}`;
    callback(detailAddress);
  }, 3000);
};


// call back hell yang harus dihindari
login((dataUser) => {
  console.log("get data province " + dataUser.province);

  getUserCity(dataUser.province, (city) => {
    console.log("get data city " + city);

    getDetailUserAddress(city, dataUser.province, (detailAddress) => {
      console.log(detailAddress);
    });
  });
});
