// Next Permutation : find next lexicographically greater permutation

// Optimal approach
function nextPermutation_1(nums) {
  // step-1: Find the break point INDEX where nums[i] < nums[i+1] and store it on INDEX from the last
  let INDEX = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      INDEX = i;
      break;
    }
  }
  // step-2: Swap the number of INDEX with the least_maximum number from the last
  for (let i = nums.length - 1; i > INDEX; i--) {
    if (nums[i] > nums[INDEX]) {
      [nums[i], nums[INDEX]] = [nums[INDEX], nums[i]];
      break;
    }
  }
  // step-3: reverse the array after the INDEX to last element
  let left = INDEX + 1;
  let right = nums.length - 1;
  while (left <= right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums;
}
