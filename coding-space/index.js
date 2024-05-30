let startTime = performance.now();
/////////////////code here /////////////////////////

function findIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      console.log('mid : ',mid);
      if (nums[mid] === target) {
          return mid;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  
  return left;
}
const nums = [1, 3, 5, 6];

const result = findIndex(nums, 2);
console.log(result);

///////////////////////////////////////////////////
let endTime = performance.now();
let executionTime = endTime - startTime;
console.log(`Running Time : ${executionTime.toFixed(3)} milliseconds`);
