const readline = require('readline');
const takeInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

takeInput.question("Enter the number of steps for the staircase: ", (number) => {
  let input = parseInt(number);
  takeInput.close();
  solveStaircase(input);
});

const solveStaircase = (n) => {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i); // Add spaces to align to the right
    let stair = '#'.repeat(i); // Use * for the staircase pattern
    console.log(spaces + stair);
  }
};
