
// Check if an Array is Sorted

// Brute Force Approach
function isSorted_1(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i])
        return false;
    }
  }
  return true;
}

// Optimal Approach
function isSorted_2(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1])
      return false;
  }
  return true;
}