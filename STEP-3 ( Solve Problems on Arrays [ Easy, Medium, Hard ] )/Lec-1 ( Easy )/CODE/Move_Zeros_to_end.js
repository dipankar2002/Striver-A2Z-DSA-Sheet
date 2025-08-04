
// Move all Zeros to the end of the array

// Brute Force Approach
function moveZeroes_1(nums) {
  let n = nums.length; 
  let temp = []; // Temporary array
  // Copy non-zero elements from original array to temp array
  for(let i = 0; i < n; i++) {
    if(nums[i] !== 0) {
      temp.push(nums[i]);
    }
  }
  // Number of non-zero elements
  let nz = temp.length; 
  // Copy elements from temp and fill the first nz fields of the original array
  for(let i = 0; i < nz; i++) {
    nums[i] = temp[i];
  }
  // Fill the rest of the cells with 0
  for(let i = nz; i < n; i++) {
    nums[i] = 0;
  }
}

// Optimal Approach
function moveZeroes_2(nums) {
  let i = 0;
    for(let k = 0; k < nums.length; k++) {
      if(nums[k] !== 0) {
        [nums[i], nums[k]] = [nums[k], nums[i]];
        i++;
      }
    }
}