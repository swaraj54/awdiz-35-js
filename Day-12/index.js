var numbers = [1, 2, 3, 4, 5, 6];
let target = 1;

function findTargetIndex(array, target) {
  let foundIndex = false;
  for (let i = 0; i < array.length; i++) {
    // console.log(i, array[i]);
    if (array[i] === target) {
      foundIndex = true;
      return i;
    }
  }
  if (foundIndex == false) {
    return -1;
  }
}

console.log(findTargetIndex(numbers, target));

















// binary approach
var numbers = [1, 2, 3, 4, 5, 6];
let target = 5;

function findTargetIndex(array, target) {
  let left = 0; // 0 0
  // 0
  let right = array.length - 1; // 5
  // 5

  while (left <= right) {
    // 0 <= 5 true   ; 4 <= 5 ; 4 <= 4
    // 0 <= 5 true  ; 4 <= 5 ; true
    let middleIndex = Math.ceil((left + right) / 2); // 0 + 5 = 5 / 2 =2.5 => 3; 4 + 5 ; 9 / 2 => 4.5 => 5
    // 5 / 2=> 2.5 => 3 ;
    // 4 + 5 =? 9 / 2=> 4.5 => 5
    // 4 + 4 => 8 / 2 => 4
    console.log(middleIndex, "middleIndex");
    let middleElement = array[middleIndex]; // 4  6
    // 4 => 6
    // 5
    console.log(middleElement, "middleelement");
    if (target == middleElement) {
      // 5 == 4 false  ; 5 === 6 false; 5 === 5 ; true
      // 6 == 6
      return middleIndex; //5 4
    } else if (target > middleElement) {
      // 5 > 4 ; 5 > 6
      // 6 > 4 true
      console.log("target is greter than middleelement");
      left = middleIndex + 1; // 4
      // left = 3 + 1 = 4
    } else if (target < middleElement) {
      // 5 < 6;
      console.log("target is smaller than middleelement");
      right = middleIndex - 1;
      //right = 5 - 1 => 4
    }
  }
}

console.log(findTargetIndex(numbers, target));

// console.log(2.5);
// console.log(Math.ceil(2.5));
// console.log(Math.floor(2.5));
