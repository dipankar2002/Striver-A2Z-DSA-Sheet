
// Leaders in an Array problem

// Brute force approach
function leaders_1(nums) {
  let n = nums.length;
  let res = new Array();
  for(let i = 0; i < n; i++) {
    let flag = true;
    for(let k = i+1; k < n; k++) {
      if(nums[i] < nums[k]) {
        flag = false;
        break;
      }
    }
    if(flag == true) res.push(nums[i]);
  }
  return res;
}

// Optimal approach
function leaders_2(nums) {
  let n = nums.length;
  let max = -Infinity;
  let res = new Array();
  for(let i = n-1; i >= 0; i--) {
    if(nums[i] > max) {
      res.push(nums[i]);
      max = nums[i];
    }
  }
  return res.reverse();
}