// left < right
// index and element

// 0 < 1 true
// 7 < 9 true
// 9 - 7 -> 2

// 2 < 3 true
// 5 < 6 true
// 6 - 5 -> 1

// // Step 1 - print all prairs
let numbers = [7, 9, 5, 6, 12, 3, 4, 23];
function findMaxDiff(array) {
  let maxDiff = -1;
  for (let i = 0; i < array.length; i++) {
    // console.log(i, array[i], "i")
    for (let j = i + 1; j < array.length; j++) {
      // console.log(j, array[j], "j")
      // console.log(i, j, array[i], array[j])
      if (array[i] < array[j]) {
        let currentDiff = array[j] - array[i];
        if (currentDiff > maxDiff) {
          maxDiff = currentDiff;
        }
        // console.log(array[j], "-", array[i], "=", array[j] - array[i]);
      }
    }
  }
  return maxDiff;
}

const output = findMaxDiff(numbers);
console.log(output, "output");

// Debounce

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const searchProduct = debounce((text) => {
  console.log("Loading...", text);
}, 1000);

searchProduct("T");
searchProduct("Ts");
searchProduct("Tsh");
searchProduct("Tshi");
searchProduct("Tshir");
searchProduct("Tshirt");

// scroll

function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const currentTime = Date.now();
    console.log(currentTime, "currentTime", lastCall, "lastCall");
    console.log(currentTime - lastCall, "currentTime - lastCall");
    console.log(delay, "delay");
    if (currentTime - lastCall >= delay) {
      lastCall = currentTime;
      fn(...args);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Api call");
}, 5000);

handleScroll();
handleScroll();
handleScroll();
handleScroll();
// window.addEventListener("scroll", handleScroll);
// window.addEventListener("scroll", handleScroll);
