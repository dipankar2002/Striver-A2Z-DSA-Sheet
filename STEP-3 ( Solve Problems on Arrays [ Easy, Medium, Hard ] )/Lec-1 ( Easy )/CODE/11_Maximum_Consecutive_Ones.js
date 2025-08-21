
// Count Maximum Consecutive One's in the array

// Optimal approach - 1
function findMaxConsecutiveOnes_1(nums) {
  let max = 0;
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 1) count++;
    else count = 0;
    
    max = Math.max(max, count);
  }
  return max;
}

// Optimal approach - 2
function findMaxConsecutiveOnes_2(nums) {
  let max = 0;
  let i = 0;
  for (let k = 0; k <= nums.length; k++) {
    if (nums[k] !== 1) {
      max = max < k - i ? k - i : max;
      i = k + 1;
    }
  }
  return max;
}