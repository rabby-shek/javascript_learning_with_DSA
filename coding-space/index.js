let startTime = performance.now();
/////////////////code here /////////////////////////

function rotateArray(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let newPosition = (i + k) % nums.length;
    let temp = nums[i];
    nums[i] = nums[newPosition];
    nums[newPosition] = temp;
  }
  return nums;
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateArray(nums, k));

///////////////////////////////////////////////////
let endTime = performance.now();
let executionTime = endTime - startTime;
console.log(`Running Time : ${executionTime.toFixed(3)} milliseconds`);
