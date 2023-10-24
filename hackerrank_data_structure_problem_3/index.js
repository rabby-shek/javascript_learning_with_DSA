const { log } = require("console");
const readline = require("readline");
const takeInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
takeInput.question("Enter the length aof the array : ", (arrayLength) => {
  let len = parseInt(arrayLength);
  const arr = [];

  const arrayValues = (index) => {
    if (index < len) {
      takeInput.question("Enter the array values : ", (values) => {
        let value = parseInt(values);
        arr.push(value);
        arrayValues(index + 1);
      });
    } else {
      takeInput.question(
        "Enter how many times the position will be shifted : ",
        (shiftValue) => {
          let shValue = parseInt(shiftValue);
          takeInput.close();
          shiftArrayPosition(shValue, arr);
        }
      );
    }
  };
  arrayValues(0);
});
const shiftArrayPosition = (d, arr) => {
    for (let j = 0; j < d; j++) {
        const firstValue = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
          arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = firstValue;
      }
    
      return arr;
};
