
// Sort an array of 0s, 1s and 2s

// Brute force approach
function sortZeroOneTwo_1(nums) {
  // simple sort
  nums.sort((a,b) => a - b);
  return nums;
}

// Better appraoch
function sortZeroOneTwo_2(nums) {
  let count_0 = 0;
  let count_1 = 0;
  let count_2 = 0;
  nums.forEach(val => {
    if(val === 0) count_0++;
    else if(val === 1) count_1++;
    else count_2++;
  })
  for(let i = 0; i < count_0; i++) nums[i] = 0;
  for(let i = count_0; i < nums.length-count_2; i++) nums[i] = 1;
  for(let i = nums.length-count_2; i < nums.length; i++) nums[i] = 2;
  return nums;
}

// Optimal approach ( Dutch National flag algorithm )
function sortZeroOneTwo_3(nums) {
  let low = 0, mid = 0, high = nums.length-1;
  while(mid <= high) {
    if(nums[mid] === 0) {
      // swap nums[low] with nums[mid]
      [ nums[low], nums[mid] ] = [ nums[mid], nums[low] ];
      low++;
      mid++;
    } else if(nums[mid] === 1) mid++;
    else {
      // swap nums[mid] with nums[high]
      [ nums[mid], nums[high] ] = [ nums[high], nums[mid] ];
      high--;
    }
  }
  return nums;
}