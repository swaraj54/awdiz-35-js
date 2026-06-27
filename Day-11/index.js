let age = 25;

function userAge() {
  age++;
}
userAge();
userAge();
userAge();
console.log(age);

function addition(a, b) {
  let result = a + b;
  return result;
}
console.log(addition(1, 2));

console.log(result);

if (true) {
  let greet = "hello";
  console.log(greet);
}
console.log(greet);

let a = 1;

function outer() {
  let b = 2;
  function inner() {
    let c = 3;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  inner();
}

outer();

Closure;

function outer() {
  var greet = "Hello";
  function inner() {
    console.log(greet);
  }
  return inner;
}
const result = outer();
result();

const mydata = {
  greet: function () {
    console.log("Hello");
  },
};
console.log(mydata.greet);

function counterConstructor() {
  let count = 0;
  return function () {
    count++;
    console.log(count, "count");
  };
}

const counter = counterConstructor();

counter();
counter();
counter();
counter();

function bankAccount() {
  let balance = 1000;
  return function (amount) {
    balance -= amount;
    console.log(balance, "remaining balance");
  };
}

const account = bankAccount();
account(200);
account(50);
account(30);
console.log(balance, "balance");







function createUser() {
  let password = "abcde";
  return {
    checkPassword: function (raw) {
      return raw == password;
    },
    checkPasswordLength: function (raw) {
      return raw.length;
    },
  };
}
const user = createUser();

console.log(user.checkPassword("abcde"));
console.log(user.checkPasswordLength("abcde"));
console.log(password);







function createCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

const c1 = createCounter();
console.log(c1());
console.log(c1());
console.log(c1());
console.log(c1());

const c2 = createCounter();
console.log(c2(), "c2");
