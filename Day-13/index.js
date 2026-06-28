console.log("start");
console.log("Processsing");
console.log("end");











// setTimeout(function, delay in milisecond)

console.log("start");
setTimeout(() => {
  console.log("Hello");
}, 2000);
console.log("end");















console.log("start");
setTimeout(() => {
  console.log("Operation start.");
  for (let i = 0; i < 10000000000; i++) {}
  console.log("Operation end.");
}, 0);
console.log("end");




















function longOperationFunction() {
  console.log("Operation start.");
  for (let i = 0; i < 10000000000; i++) {}
  console.log("Operation end.");
}

console.log("start");
longOperationFunction();
console.log("end");

















// setInterval();
// clearInterval();

// setInterval(function, delay in milisecond )

var counter = 0;
const intervalid = setInterval(() => {
  console.log("Hello");
  counter++;
  console.log(counter, "counter");
  if (counter == 5) {
    clearInterval(intervalid);
  }
}, 2000);











fetch("https://fakestoreapi.com/products")
  .then((products) => {
    return products.json();
  })
  .then((jsData) => console.log(jsData));

















const myPromiese = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data not recevied.");
  }, 5000);
});

myPromiese
  .then((res) => console.log(res))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("always runs");
  });
