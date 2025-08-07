
// Find the Majority Element that occurs more than N/2 times

// Brute force approach
function majorityElement_1(nums) {
  let n = nums.length;
  for(let i = 0; i < n; i++) {
    let c = 0;
    for(let k = i; k < n; k++) {
      if(nums[i] === nums[k]) {
        c++;
      }
    }
    if(c > n/2) return nums[i];
  }
  return -1;
}

// Better approach
function majorityElement_2(nums) {
  let n = nums.length;
  let map = new Map();
  nums.forEach(element => {
    map[element] = ( map[element] || 0 ) + 1;
  });
  for(key in map) {
    if(map[key] > n/2) return Number(key);
  }
  return -1;
}

// Optimal approach ( Moore’s Voting Algorithm )
function majorityElement_3(nums) {
  let n = nums.length;
  let ele = 0;
  let count = 0;
  for(let i = 0; i < n; i++) {
    if(count === 0) {
      ele = nums[i];  
      count++
    } else if(ele === nums[i]) count++;
    else count--;
  }
  return ele;
}