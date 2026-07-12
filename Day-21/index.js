function findTargetFromRotatedArray(arr, target) {
  console.log(arr, "array");
  console.log(target, "target");

  //   Step 1 :
  //   left = 0 - index;  = 4
  //   right = 6 - index; = 4
  //   mid = Math.floor( (left 0 + 6 right) / 2 ) 3 => 3  ;;; 4 + 6 => 10 / 2 => 5; 8/ 2=> 4
  //   midELement = array[mid] => 7 ; 1 ; 0
  //   1. midELement 7 == 0 target => false ;; 1 === 0  false  ; 0 === 0 true

  //   Step 2 :
  //   2. arr[left] <= arr[mid] ; 4 <= 7 => if true then left side sorted if false then left side it not sorted
  //         0 <= 1
  //         2.1    target >= arr[left] && target < arr[mid]
  //             0    >= 4 && 0 < 7
  //                 0 >= 0 && 0 < 1
  //                 true right = mid - 1
  //                 false left = mid + 1

  //   3.  else   arr[left] > arr[mid]
  //         3.1 target <= arr[right] && target > arr[mid ]
  //             true  left = mid + 1
  //             false  right = mid - 1

  //   return true;

  let left = 0; // 4
  let right = arr.length - 1; //  6;  4

  while (left <= right) {
    // 4 <= 6
    let midIndex = Math.floor((left + right) / 2); // 0 + 6 => 3; 4 + 6 => 5; 4 + 4 => 8 / 2=> 4
    let midElement = arr[midIndex]; // 7 ;; 1 ;;; 0

    if (midElement == target) {
      // 7 == 0 ; false;; 1 === 0 false ; 0 === 0
      return midIndex;
    }
    if (arr[left] <= arr[midIndex]) {
      // 4 <= 7 true -> left side is sorted side ;  0 <=  1 = true
      console.log("inside if");
      if (target >= arr[left] && target < arr[midIndex]) {
        console.log("inside if if");
        // 0 >= 4 false  &&  true 0 < 7; 0 >=  0 && 0 < 1=> true
        right = midIndex - 1;
      } else {
        console.log("inside if else");
        left = midIndex + 1;
      }
    } else {
      console.log("inside else");
      if (target > arr[midIndex] && target <= arr[right]) {
        console.log("inside else if");
        left = midIndex + 1;
      } else {
        console.log("inside else else");
        right = midIndex - 1;
      }
    }
  }
}

const numbers = [7, 1, 2, 3, 4, 5, 6];
let target = 2;

const result = findTargetFromRotatedArray(numbers, target);
console.log(result, "result");
