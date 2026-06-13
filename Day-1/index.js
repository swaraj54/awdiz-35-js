var age = 25;

console.log(age, age, age);








var number = 1; // declare and assign
console.log(number);

number = 2; // re assign
console.log(number);

var number = 3; // re declare and assign
console.log(number);








let age = 25;
console.log(age);

age = 26;
console.log(age);

let age = 27;
console.log(age);









const number = 20;
console.log(number);

number = 21;
console.log(number);

const number = 22;
console.log(number);








                var     let      const
reassign        yes      yes       no

redeclare       yes      no        no

hoisting        yes     no        no

scope         function  block     block







age = 25;
console.log(age);

var age;






age = 25;
console.log(age);

let age;
const age = 25;







var age1 = 25;
let age2 = 25;
const age3 = 25;
{
  console.log(age1);
  console.log(age2);
  console.log(age3);
}

{} - block







{
  const age = 25;
  let age = 25;
}

console.log(age);










var number2;
var number1 = 1;
{
  number2 = 2;
  let number3 = 3;
  const number4 = 4;
  console.log(number4);
  {
    console.log(number3);
    console.log(number2);
  }
}


console.log(number1);
var let const 
{
    var let const 
}

{
    var let const 
}
var 














console.log(number);
number = 20;
console.log(number);

var number;
