
// Remove Duplicates in-place from Sorted Array

// Brute Force Approach
function removeDuplicates_1(nums) {
  let set = new Set(nums);
  console.log(set)
  let uniqueNums = Array.from(set);
  console.log(uniqueNums)
  for (let i = 0; i < uniqueNums.length; i++) {
    nums[i] = uniqueNums[i];
  }
  return uniqueNums.length;
}

// Optimal Approach
function removeDuplicates_2(nums) {
  let left = 0;
  for(let right = 0; right < nums.length; right++) {
    if(nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
  }
  return left+1;
}