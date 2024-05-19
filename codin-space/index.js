let startTime = performance.now();
function evenOrOdd(value) {
  if (value % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
let result = evenOrOdd(12312423235453453453450111);
console.log(result);
let endTime = performance.now();
let executionTime = endTime - startTime;
console.log(`Running Time : ${executionTime} milliseconds`);
