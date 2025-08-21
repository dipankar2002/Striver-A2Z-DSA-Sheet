// Find the number that appears once, and the other numbers twice

// Brute Force Approach
function singleNumber_1(nums) {
  const n = nums.length;
  // Run a loop for selecting elements:
  for(let i = 0; i < n; i++) {
    const num = nums[i]; // selected element
    let cnt = 0;
    // Find the occurrence using linear search:
    for(let j = 0; j < n; j++) {
      if(nums[j] === num) {
        cnt++;
      }
    }
    // If the occurrence is 1, return the number:
    if(cnt === 1) {
      return num;
    }
  }
  // This line will never execute
  // if the array contains a single element.
  return -1;
}

// Better approach - 1
function singleNumber_2(nums) {
  let n = nums.length;
  // Find the maximum element:
  let maxi = nums[0];
  for(let i = 0; i < n; i++) {
    maxi = Math.max(maxi, nums[i]);
  }
  // Declare hash array of size maxi+1
  // And hash the given array:
  let hash = new Array(maxi + 1).fill(0);
  for(let i = 0; i < n; i++) {
    hash[nums[i]]++;
  }
  // Find the single element and return the answer:
  for(let i = 0; i < n; i++) {
    if(hash[nums[i]] === 1) {
      return nums[i];
    }
  }
  // This line will never execute
  // if the array contains a single element.
  return -1;
}

// Better approach - 2
function singleNumber_3(nums) {
  let n = nums.length;
  // Declare the hashmap.
  const map = new Map();
  nums.forEach(ele => {
    map[ele] = ( map[ele] || 0 ) + 1;
  });

  // Find the single element and return the answer:
  for(const [num, count] of map) {
    if(count === 1) return num;
  }
  // This line will never execute
  // if the array contains a single element.
  return -1;
}

// Optimal approach
function singleNumber_4(nums) {
  // XOR all the elements:
  let xor = 0;
  for(let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  return xor;
}