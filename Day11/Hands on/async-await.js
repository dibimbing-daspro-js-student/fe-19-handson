// async function biasa
async function sayHi() {
  // ...
}

// async arrow function
const sayHi2 = async () => {
  // ...
};

const login = () => {
  console.log("user menginputkan nama");
  console.log("user menginputkan password");
  console.log("validasi login ...");

  const promise = new Promise((success, failed) => {
    setTimeout(() => {
      if (true) {
        success({ province: "Jawa Barat" });
      } else {
        failed("Login failed");
      }
    }, 3000);
  });

  return promise;
};

const getUserData = async () => {
  const userData = await login(); // await from function that return promise
  console.log(userData);
};

getUserData();

const getUsers = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// getUsers().then((users) => {
//   users.map((user) => console.log(user.address.street));
// });
