Data types

String
Number
boolean
null
undefined








String

"" '' ``

let email = `abc@gmail.com`;
let name = "abc";
let password = "pass@123";

console.log(email, "email");
console.log(name, "name");
console.log(password, "password");

console.log( typeof(email) );
console.log( typeof(name) );
console.log( typeof(password) );











const age = 25;
console.log(age, "age");
console.log( typeof(age) );







const phoneNumber = "23456543";
console.log(phoneNumber, "phoneNumber");
console.log( typeof(phoneNumber) );







const myPassword = "Pass@123"
console.log(myPassword, "myPassword");
console.log( typeof(myPassword) );








const isLoggedIn = false;
const isLoggedIn = true;
console.log(isLoggedIn, "isLoggedIn");
console.log(typeof isLoggedIn);










var firstName;
console.log(firstName, "firstName");
console.log(typeof firstName);






var userData = null;
console.log(userData, "userData");
console.log(typeof userData);





let a = 10;
console.log(a, "a");
let b = a;
console.log(b, "b");
b = 20;
console.log(a, "a");
console.log(b, "b");










Arithmetic Operators

console.log(10 + 5); // Addition
console.log(5 - 10); // Subtraction
console.log(10 * 5); // Multiplication
console.log(30 / 2); // Division
//             6
// console.log(30 % 2); 0

//            ___  17- Quotient
//         2 /  34
//              34
//               0  - remainder - %

//               1 - odd
//               0 - even

console.log(10 % 2); // 0 - even
console.log(11 % 2); // 1 - odd
console.log(12 % 2); // 0 - even
console.log(13 % 2); // 1 - odd
console.log(14 % 2); // 0 - even
console.log(15 % 2); // 1 - odd
















var number1 = 10;
var number2 = "10";
// it check only data not data type
console.log(number1 == number2); // 15

// // it check data and data type both
console.log(number1 === number2); // false










var left = 10;
var right = 20;

console.log(left < right);
console.log(left > right);
console.log(left == right);
console.log(left <= right);
console.log(left >= right);
console.log(left != right);
