const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function arrayManipulation(n, queries) {
  const arr = new Array(n + 1).fill(0);

  for (const query of queries) {
    const [a, b, k] = query;
    arr[a] += k;
    if (b + 1 <= n) {
      arr[b + 1] -= k;
    }
  }

  let max_value = 0;
  let current_sum = 0;
  for (let i = 1; i <= n; i++) {
    current_sum += arr[i];
    max_value = Math.max(max_value, current_sum);
  }

  return max_value;
}

rl.question('Enter the value of n: ', (n) => {
  const queries = [];
  
  function askQuery(index) {
    if (index < n) {
      rl.question(`Enter query ${index + 1} (a b k): `, (query) => {
        const [a, b, k] = query.split(' ').map(Number);
        queries.push([a, b, k]);
        askQuery(index + 1);
      });
    } else {
      const result = arrayManipulation(Number(n), queries);
      console.log(`Maximum value in the array: ${result}`);
      rl.close();
    }
  }
  
  askQuery(0);
});
