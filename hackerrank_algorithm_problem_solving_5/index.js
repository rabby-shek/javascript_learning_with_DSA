const numRows = 3;
const numCols = 3;

const twoDArray = [];

for (let i = 0; i < numRows; i++) {
  const row = [];
  for (let j = 0; j < numCols; j++) {
    // Generate fake numbers for the elements
    const fakeNumber = Math.floor(Math.random() * 100); // Generates random numbers between 0 and 99
    row.push(fakeNumber);
  }
  twoDArray.push(row);
}

console.log("Generated 3x3 array:");
console.log(twoDArray);

let primaryDiagonalSum = 0;
let secondaryDiagonalSum = 0;

for (let i = 0; i < numRows; i++) {
  primaryDiagonalSum += twoDArray[i][i];
  secondaryDiagonalSum += twoDArray[i][numCols - 1 - i];
}

console.log("Sum of the primary diagonal:", primaryDiagonalSum);
console.log("Sum of the secondary diagonal:", secondaryDiagonalSum);

const difference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
console.log("Difference between the diagonal sums:", difference);
