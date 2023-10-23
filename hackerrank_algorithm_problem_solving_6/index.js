const readline = require("readline");
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//taking the array length
input.question("Enter the array lenght : ", (arrayLength) => {
  let len = parseInt(arrayLength);
  const arr = [];
  const inputValues = (index) => {
    if (index < len) {
      input.question("Enter the values : ", (values) => {
        arr.push(parseInt(values));
        inputValues(index + 1);
      });
    } else {
      console.log(arr);
      calculateRation(arr);
      input.close();
    }
  };

  inputValues(0);
});

const calculateRation = (arr) => {
  let totalLength = arr.length;
  let positive = arr.filter((values) => values > 0).length;
  let negative = arr.filter((valuse) => valuse < 0).length;
  let nutral = arr.filter((values) => values === 0).length;

  let positiveRation = positive / totalLength;
  let negativeRatio = negative / totalLength;
  let nutralRation = nutral / totalLength;
  console.log(positiveRation.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(nutralRation.toFixed(6));
};
