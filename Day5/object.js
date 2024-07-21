// const carName = "Fiat";
// const carModel = "500";
// const carWeight = "850kg";

// Object terdiri dari properti dan method
// properti adalah sebuah nilai seperti varaibel tapi didalam object
// method adalah sebuah variabel yang berisi function

// Function itu biasanya terdapat argument dan parameter
// argument adalah masukan atau inputan ketika function tesebut dipanggil
// paramater adalah nilai yang harus diisi pada function

// Object biasa tanpa class
const fiatBiasa = {
  name: "Fiat",
  model: "500",
  weight: "850kg",
  color: "white",

  start: function () {},
  drive: function () {},
  brake: function () {},
  stop: function () {},
};

const avanzaBiasa = {
  name: "Fiat",
  model: "500",
  weight: "850kg",
  color: "white",

  start: function () {},
  drive: function () {},
  brake: function () {},
  stop: function () {},
};

// Object class bisa dipake berulang kali/reusable
function Car(name, model, weight, color, person) {
  this.name = name;
  this.model = model;
  this.weight = weight;
  this.color = color;
  this.person = person;

  this.start = function () {
    console.log("Menyala");
  };

  this.drive = function () {
    console.log("Menyetir");
  };

  this.brake = function () {
    console.log("Mengerem");
  };

  this.stop = function () {
    console.log("Berhenti");
  };

  this.weightTotal = function () {
    console.log(
      `total berat saat dikendarai ${this.person} orang adalah ${
        this.weight * this.person
      }`
    );
  };

  this.jalankanMobil = function () {
    this.start();
    this.drive();
    this.brake();
    this.stop();
  };
}

const fiat = new Car("Fiat", "500", 10, "white", 2);
const avanza = new Car("Avanza", "New", 15, "black", 3);

fiat.name = "All New Fiat";
// console.log(fiat);

fiat.weightTotal();
fiat.jalankanMobil();
