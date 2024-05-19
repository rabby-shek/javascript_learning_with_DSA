function findSum(arr) {
  const target = 13; // T.C = O(1) | S.C = O(1)

  for (let i = 1; i <= arr.length; i++) { // T.C = O(n) | S.C = O(1)
    for (let j = 1; j <= arr.length; j++) { //T.C = O(n) | S.C = O(1)
      if (arr[i] + arr[j] === target) {
        console.log(arr[i] + arr[j], "found the target");
      } else {
        console.log("not found");
      }
    }
  }
}
//over all time complexity of this program is O(n)
// over all space complexity of this program O(1)

const arr = [1, 3, 8, 6, 5];
findSum(arr);
