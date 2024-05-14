function findSum(arr) {
  const target = 13;
  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(arr[i] + arr[j], "found the target");
      } else {
        console.log("not found");
      }
    }
  }
}

const arr = [1, 3, 8, 6, 5];
findSum(arr);
