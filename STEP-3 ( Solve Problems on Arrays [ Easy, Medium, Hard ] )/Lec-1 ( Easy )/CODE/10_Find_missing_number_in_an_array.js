
// Find the missing number in an array

// Brute force approach
function missingNumber_1(nums) {
  for(let i = 0; i <= nums.length; i++) {
    let flag = 0;
    for(let k = 0; k < nums.length; k++) {
      if(nums[k] === i) {
        flag = 1;
        break;
      }
    }
    if(flag === 0) return i;
  }
  return -1;
}

// Better approach
function missingNumber_2(nums) {
  let hash = new Array(nums.length+1).fill(0);
  for(let i = 0; i < nums.length; i++) {
    hash[nums[i]] = 1;
  }
  for(let i = 0; i < hash.length; i++) {
    if(hash[i] === 0) return i;
  }
  return -1;
}

// Optimal approach - 1
function missingNumber_3(nums) {
  let n = nums.length;
  let totalSum = n * ( n + 1 ) / 2;

  let actualSum = 0;
  nums.forEach(val => actualSum += val);

  return totalSum - actualSum;
}

// Optimal approach - 2
function missingNumber_4(nums) {
  let xor1 = 0;
  for(let i = 0; i <= nums.length; i++) {
    xor1 ^= i;
  }
  let xor2 = 0;
  for(let i = 0; i < nums.length; i++) {
    xor1 ^= nums[i];
  }
  return xor1 ^ xor2;
}