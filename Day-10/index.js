// Nested Loops

// While loop

// Object

// {
//      {
//         {

//         }
//      }
// }

// Nested for loop

for (let i = 1; i <= 2; i++) {
  console.log(i);
  for (let j = 1; j <= 2; j++) {
    console.log(j);
  }
}

// 1st iteration
// i = 1
// i <= 2 ; 1 <= 2; true
// LOG(i) 1
// J = 1;
// j <= 2; 1 <= 2 ; true
// log(j) 1
// j++; 1 => 2
// j = 2
// j <= 2; 2 <= 2; true
// log(j) 2
// j++ ; 2 => 3
//  j <= 2; 3 <= 2 ; false
// i++; 1 => 2

// 2nd iteration
// i = 2
// i <= 2 ; 2 <= 2; true
// log(i)  2
// j = 1;
// j <= 2; 1 <= 2; true
// log(j) 1
// j++; 1 => 2
// j <= 2; 2 <= 2; true
// log(j) 2
// j++; 2 => 3
// j = 3;
// j <= 2; 3 <= 2; false
// i++
// 2 => 3
// i = 3

// 112212

// 3rd iteration
// i = 3
//  i <= 2
//  3 <= 2 false

// Q find biggest number from given array
let numbers = [12,23,45,32,23,77,65,44,36,84,24];
let biggestNumber = 0;

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i], "i");
  for (let j = i + 1; j < numbers.length; j++) {
    console.log(numbers[j], "j");
    if (numbers[i] < numbers[j]) {
      biggestNumber = numbers[j];
    }
  }
}
console.log(biggestNumber, "biggestNumber");














// While loop
// for(starting; ending; sequence){
//     code
// }

// starting
// while(ending){
//     code
//     sequence
// }

// Q Print numbers from 1 - 3 with while loop

let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}

// 1st iteration
// i = 1
// i <= 3; 1 <= 3; true
// log(i) 1
// i++ ; 1 => 2

// 2nd iteration
// i = 2;
// i <= 3; 2 <= 3; true
// log(i) 2
// i++; 2 => 3

// 3rd iteration
// i =3 ;
// i<= 3 ; 3<= 3 ; true
// log(i) 3
// i++; 3 => 4

// 4th iteration
// i = 4
// i <= 3; 4 <= 3;  false










let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}










// Object

// var nums = [1, 2, 3, 4, 5];

// var userData = { key : value , key2 : value2, key3 : value3}

var userData = {
  name: "Awdiz",
  surname: "Institute",
  age: 12,
  location: "Bandra",
  isOpen: false,
  courses: ["full stack", "cloud", "networking"],
  students: { fullStack: 50, cloud: 100, networking: 150 },
};
console.log(userData, "userData");
console.log(userData.age);
console.log(userData.name);
console.log(userData.surname);
console.log(userData.location);
console.log(userData.isOpen);
console.log(userData.courses);
console.log(userData.students);
console.log(userData["age"]);
console.log(userData["name"]);
console.log(userData["surname"]);
console.log(userData["location"]);
console.log(userData["isOpen"]);
console.log(userData.students.networking);
console.log(userData.courses[userData.courses.length - 1]);








const myObject = {
  name: "Awdiz",
  age: 12,
  greet: function () {
    return this.age;
  },
};
// console.log(myObject, "myObject");
console.log(myObject.name, "name");
console.log(myObject.greet, "greet");
console.log(myObject.greet(), "greet()");
