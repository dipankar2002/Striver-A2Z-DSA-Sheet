
// Second Largest Element in an Array without sorting

// Brute Force Approach
function secondLargestElement_1(nums) {
  // Edge case when only one element is present in the array
  if (nums.length === 0 || nums.length === 1) {
    return -1;
  }
  
  nums.sort((a, b) => a - b);
  return nums[nums.length - 2];
}

// Better Approach
function secondLargestElement_2(nums) {
  // Edge case when only one element is present in the array
  if (nums.length === 0 || nums.length === 1) {
    return -1;
  }

  let large = -Infinity;
  let second_large = -Infinity;

  for(let i = 0; i < nums.length; i++) {
    large = Math.max(large, nums[i]);
  }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > second_large && nums[i] !== large)
      second_large = nums[i];
  }
  return second_large;
}

// Optimal Approach
function secondLargestElement_1(nums) {
  // Edge case when only one element is present in the array
  if (nums.length < 2) return -1;

  let large = -Infinity;
  let second_large = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > large) {
      second_large = large;
      large = nums[i];
    } else if (nums[i] > second_large && nums[i] !== large) {
      second_large = nums[i];
    }
  }
  return second_large;
}