
// Find the Largest element in an array

// Brute Force Approach
function largestElement_1(nums) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1];
}

// Optimal Approach
function largestElement_2(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
  }
  return max;
}