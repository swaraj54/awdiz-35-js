// async await

// async function getProductsFromFakestoreapi() {
//   try {
//     // fetch("https://fakestoreapi.com/products")
//     //   .then((response) => response.json())
//     //   .then((data) => console.log(data));
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data, "data");
//   } catch (error) {
//     console.log(error);
//   }
// }

// getProductsFromFakestoreapi();

// let user = "Virat";
// let message = "Welcome to Awdiz";

// let greeting = `Hello ${user}! ${message}`;

// console.log(greeting, "greeting");

// const userData = {
//   name: "Virat",
//   age: 34,
//   address: { city: "Delhi", state: "Delhi" },
// };

// const { age, name: nickName } = userData;

// console.log(age, "age");
// console.log(nickName, "nickName");

// const users = ["virat", "rohit", "dhoni", "shami", "bumrah"];
// const [player1, player2, player3, player4, player5] = users;
// console.log(player1, "player1");

// const array = [1, 2, 3];
// const newArray = [...array, 7, 8, 9];
// console.log(newArray, "newArray");

// const array2 = [4, 5, 6];

// const mergedArray = [...array, ...array2];

// console.log(mergedArray, "mergedArray");

// const myObj = { name: "Virat" };
// const newObj = { ...myObj, age: 34 };
// console.log(newObj, "newObj");

// function sum(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// const result = sum(1, 2, 3, 4, 5);
// console.log(result, "result");

function greet(name = "Guest", age = 34) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
greet();
