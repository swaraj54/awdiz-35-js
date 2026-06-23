 Question 8
Print this pattern using for loop:

*
**
***
****
*****

Step 1 - print * 5 times
step 2 - print line wise *s

console.log("*")
console.log("**")
console.log("***")
console.log("****")
console.log("*****")

let starPattern = "*";
for (let i = 0; i < 100; i++) {
  console.log(starPattern);
  starPattern += "*";
}

1st Iteration :
starPattern = "*"
 log(starPattern) "*"
starPattern += "*"
"**"

2nd iterration
log(starPattern) "**"
starPattern += "*"
starPattern = "***"

5th iteration
log(starPattern) "*****"
starPattern += "*"
i++; 4 -> 5
i = 5

i < 5 , 5 < 5 false














Question 9
Find the sum of digits of a number using a loop.
Example:

Input: 1234

Output: 10

const input = 12345678;
// console.log(input,"input")
let inputStr = input.toString();
console.log(inputStr, "inputStr");
console.log(inputStr.split(""));

let output = 0;
for (let i = 0; i < inputStr.length; i++) {
  console.log(inputStr[i]);
  output += Number(inputStr[i]);
}
console.log(output, "output");












Question 10
Reverse a number using a loop.
Example:

const Input = 12345;
let InputStr = Input.toString();
console.log(InputStr, InputStr.length, "InputStr");
// Output: 54321
let output = "";
for (let i = InputStr.length - 1; i >= 0; i--) {
  output += InputStr[i];
}

console.log(Number(output), "output");





Print numbers from 1 - 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}









Print numbers from 10 - 1

for (let i = 10; i >= 1; i--) {
  console.log(i);
}





Print elements from given array

let myarray = ["a", "b", "c", "d"];
console.log(myarray.length);
console.log(myarray[myarray.length - 1]);
for (let i = 0; i < myarray.length; i++) {
  console.log(myarray[i]);
}











// Print target index from array

let students = ["a", "c", "e", "g"];

let target = "e";

let index;

for (let i = 0; i < students.length; i++) {
  //   console.log(students[i], target);
  if (students[i] == target) {
    index = i;
    break;
  }
  console.log(i);
}

if (index == undefined) {
  console.log("Given target is not exist in array");
} else {
  console.log(index, "output");
}
