// push
// pop
// shift
// unshift
// map
// filter
// reduce
// foreach
// at
// concat
// find
// findIndex

every;

const isBelowThreshold = (num) => num < 60;

const array = [23, 34, 56, 12, 32];

console.log(array.every(isBelowThreshold));







const numbers = [1, 2, 3, 4];

console.log(numbers.fill(0, 1, 3));

console.log(numbers.fill(6, 0, 4));

console.log(numbers.fill("Hello"));








const numbers = [12, 34, 56, 88, 334, 65];

const lastElementWhoPassedCondition = numbers.findLast((ele) => ele > 80);
console.log(lastElementWhoPassedCondition, "ele");

const lastElementWhoPassedConditionIndex = numbers.findLastIndex(
  (ele) => ele > 80,
);
console.log(lastElementWhoPassedConditionIndex, "index");








const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(7));









join;

const students = ["Virat", "Rohit", "Rahul"];

console.log(students.join());
console.log(students.join(""));
console.log(students.join(" "));
console.log(students.join("-"));









const animals = ["cat", "cat", "dog", "mouse", "cat"];

console.log(animals.lastIndexOf("cat"));









const numbers = ["one", "two", "three"];
console.log(numbers, "numbers 1");

const reversed = numbers.reverse();
console.log(reversed);

console.log(numbers, "numbers 2");













const animals = ["cat", "dog", "mouse", "ant", "elephant"];

console.log(animals.slice(2, 3));

console.log(animals.slice(1, 5));

console.log(animals.slice(-3));

console.log(animals.slice(0, -1));

console.log(animals.slice(-3, -1));










const months = ["jan", "march", "may", "june"];

// months.splice(index, 0 / 1, NewElement);
months.splice(1, 0, "feb");

months.splice(3, 0, "april");

months.splice(0, 1, "start");

console.log(months);











const months = ["jan", "march", "may", "june"];
console.log(months.toString());
