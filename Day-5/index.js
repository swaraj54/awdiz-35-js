var students = [];
console.log(students);
students.push("Virat");
students.push("Rohit");
students.push("Rahul");
console.log(students);
console.log(students[0]);








var numbers = [1, 2, 3, 4];

const lastElement = numbers.pop();
const secondlastElement = numbers.pop();
console.log(numbers, lastElement, secondlastElement);









const numbers = [1, 2, 3, 4];
const firstElement = numbers.shift();
console.log(numbers, firstElement);







const numbers = [1, 2, 3, 4];
numbers.unshift(0);
numbers.unshift(5);
console.log(numbers);





const numbers = [1, 2, 3, 4];
[2, 4, 6, 8]
const updatdNumbers = numbers.map((number) => number + number);
const updatdNumbers = numbers.map(function (number) {
  number + number;
});
console.log(updatdNumbers, "updatdNumbers");
console.log(numbers, "numbers");






const products = [100, 500, 1000];
const gstIncludedPrice = products.map((price) => price * 1.18);
console.log(gstIncludedPrice, "gstIncludedPrice");

// filter;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = numbers.filter((num) => num % 2 === 1);

console.log(oddNumbers, "oddNumbers");






const studentsData = [
  { name: "Virat", active: false },
  { name: "Kane", active: false },
  { name: "Rahul", active: true },
];

const activePlayers = studentsData.filter((player) => player.active);

console.log(activePlayers, "activePlayers");




// Reduce - return a single value





var numbers = [1, 2, 3, 4, 5];
const addition = numbers.reduce((acc, number) => acc + number, 0);
console.log(addition, "addition"); // 15




const cart = [100, 300, 34567];
const totalPrice = cart.reduce((acc, price) => acc + price, 0);
console.log(totalPrice, "totalPrice");




const numbers = [1, 6, 4, 5, 6, 7, 8, 3, 2, 4];
const totalElementsCount = numbers.reduce((acc) => acc + 1, 0);
console.log(totalElementsCount);





// conditions ? true : false;
console.log(2 < 3 ? "true" : "false kjbnhuj0jdew");






const numbers = [3, 6, 10, 2, 64];

const max = numbers.reduce((acc, num) => (acc > num ? acc : num), 0);

console.log(max, "max");









const numbers = [1, 2, 3, 4];

numbers.forEach((num) => console.log(num * 2));

// at






const numbers = ["Awdiz", 2, 3, 4, 5];
console.log(numbers.at(0)); // Awdiz







const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3, "array3");






const numbers = [15, 32, 4, 5, 56, 6, 6];
const biggerThan = numbers.find((num) => num > 5);
console.log(biggerThan, "biggerThan");





const number = [3, 4, 6, 7, 8, 3, 2, 5, 7, 434];

const output = number.findIndex((num) => num > 10);
console.log(output, "output"); // index 9 
