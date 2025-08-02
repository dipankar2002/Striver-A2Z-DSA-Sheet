
// Left Rotate an array by one place

// Brute force Approach
function rotateArrayByOne_1(nums) {
  let temp = new Array(nums.length);
  for (let i = 1; i < nums.length; i++) {
    temp[i - 1] = nums[i];
  }
  temp[nums.length - 1] = nums[0];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = temp[i];
  }
  return nums;
}

// Optimal Approach
function rotateArrayByOne_2(nums) {
  let temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i - 1] = nums[i];
  }
  nums[nums.length - 1] = temp;
  return nums;
}