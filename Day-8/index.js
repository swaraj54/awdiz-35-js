// Loop for, while,  do while

// console.log(1);
// Loop - execute block multiple times

// run for 10 times - loop
// {
//     console.log("Hi")
// }

// Print numbers from 1 - 10;

// for loop  - 3

// starting 1

// ending 10

// sequence 1

// for(starting ; ending condition true/false; sequence ){
//     multiple lines of code
// }

// for (let number = 1; number < 11; number++) {
//   console.log(number);
// }

// for (let number = 1; number < 6; number++) {
//   console.log(number);
// }

// for (let number = 11; number < 16; number++) {
//   console.log(number);
// }

// for (let number = 100; number < 201; number++) {
//   console.log(number, 1, "Hi");
//   console.log("Hello", number);
// }

// Find total count of odd from number 1 - 100

var totalOddNumbersCount = 0;
var totalEvenNumbersCount = 0;

for (var i = 1; i < 101; i++) {
  if (i % 2 == 1) {
    totalOddNumbersCount++;
  } else {
    totalEvenNumbersCount++;
  }
}

console.log(totalOddNumbersCount, "totalOddNumbersCount");
console.log(totalEvenNumbersCount, "totalEvenNumbersCount");

// 1st iteration :

// number = 1
// number < 11; 1 < 11  -> true
// { log(1) } terminal 1
// number++  2

// 2nd iteratin
// number = 2;
// number < 11; 2 < 11 -> true
// { log(1)} terminal 1
// number++  3

// 3rd iteration
// number = 3
// number < 11 ; 3 < 11 -> true
// { log(1)} termial 1
// number++ 4

// 4th iteration
// number = 4
// number < 11 ; 4 < 11 -> true
// { log(1)} terminal 1
// number++ 5

// 5th iteration 6
// 6th iteration 7
// 7th  8
// 8th  9
// 9th 10
// 10th
// number = 10
// number < 11; 10 < 11 -> true
// { log(1) } terminal 1
// number++

// 11th iteration
// number = 11;
// number < 11; 11 < 11 -> false

let num = 12;
num = 13;
num = num + 1;
num += 2;
num++;
console.log(num);

let num2 = 4;
num2 = 3;
num2 = num2 - 1;
num2 -= 1;
num2--;
console.log(num2);

// Conditional Statement

// if else
// switch

// if else

// if(condition){
//     if condition is true then this block will execute
// } else {
//     if condition is false then this block will execute
// }

// conditions ? "true" : "false"
console.log(2 < 3);
if (1 > 3) {
  console.log("Condition is true");
} else {
  console.log("Condition is false ");
}

// Q Check is user eligible for rto

// 18 <  not eligible
// 18 > eligible
// // 18 == LL

var userAge = 15;

if (userAge > 18) {
  console.log("You are eligible for L.");
} else if (userAge == 18) {
  console.log("Eligiblle for LL.");
} else {
  console.log("Not eligible for dl.");
}

var isAssignmentCompleted = false;

if (isAssignmentCompleted) {
  console.log("Good!");
} else {
  console.log("Please complete it asap.");
}

// switch

var fruit = "Grapes";

switch (fruit) {
  case "Watermelon":
    console.log("watermelon is available.");
    break;
  case "Apple":
    console.log("Apple is available.");
    break;
  case "Mango":
    console.log("Mango is available.");
    break;
  default:
    console.log("Stock is not available.");
}
