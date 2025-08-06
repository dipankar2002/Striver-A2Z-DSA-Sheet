
// Two Sum : Check if a pair with given sum exists in Array

// Brute force approach
function twoSum_1(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let k = i + 1; k < nums.length; k++) {
      if(nums[i] + nums[k] === target) return [i,k];
    }
  }
  return [-1,-1];
}

// Better approach
function twoSum_2(nums, target) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if(map.hasOwnProperty(x)) return [ map[x], i];
    map[nums[i]] = i; 
  }
  return [-1,-1];
}

// Optimal approach
function twoSum_3(nums, target) {
  // Step 1: Store original indices
  let indexedNums = nums.map((num, index) => [num, index]);
  console.log(indexedNums)
  // Step 2: Sort based on values
  indexedNums.sort((a, b) => a[0] - b[0]);

  let left = 0, right = nums.length - 1;
  while (left < right) {
    let sum = indexedNums[left][0] + indexedNums[right][0];
    if (sum === target) {
      return [indexedNums[left][1], indexedNums[right][1]]; // return original indices
    } else if (sum < target) left++;
    else right--;
  }
  return [-1, -1]; // No pair found
}