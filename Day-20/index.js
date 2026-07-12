class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  data() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

const student1 = new Student("Virat", 20, "A");
student1.data();

class Bank {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
  }
}

const bank1 = new Bank();
bank1.deposit(1000);
bank1.deposit(1000);
console.log(bank1.#balance); // This will throw an error because #balance is private

// find maximum and minimum count of number in array use object
//            3 and 1

const numbers = [
  1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 6, 6, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9,
];

function findMaxMinCount(arr) {
  let countMap = {};
  let maxCount = -Infinity; // 1 2 3
  let minCount = Infinity; //1
  let maxElement = null; //'1' '2' '3'
  let minElement = null; //'1'
  for (let i = 0; i < arr.length; i++) {
    if (countMap[arr[i]] == undefined) {
      countMap[arr[i]] = 1;
    } else {
      countMap[arr[i]] += 1;
    }
  }

  //   const countMap = { '1': 1, '2': 2, '3': 3, '4': 1 };
  for (let key in countMap) {
    // console.log(key, "key", countMap[key]);
    if (countMap[key] > maxCount) {
      // 1 > 2
      maxCount = countMap[key];
      maxElement = key;
    }
    if (countMap[key] < minCount) {
      //1 < 1
      minCount = countMap[key];
      minElement = key;
    }
  }

  return [Number(maxElement), Number(minElement)];
}
const output = findMaxMinCount(numbers);
console.log(output, "output");

// let obj = { name: "aWDIZ", age: 20 };

// if (obj["age"] == undefined) {
//   obj["age"] = 20;
// }

// console.log(obj, "obj");
