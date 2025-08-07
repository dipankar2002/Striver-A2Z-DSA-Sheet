
// Kadane's Algorithm : Maximum Subarray Sum in an Array

// Brute force approach
function maxSubarraySum_1(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < nums.length; i++) {
    for(let k = i; k < nums.length; k++) {
      let sum = 0;
      for(let j = i; j <= k; j++) {
        sum += nums[j];
      }
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

// Better approach
function maxSubarraySum_2(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < nums.length; i++) {
    let sum = 0;
    for(let k = i; k < nums.length; k++) {
      sum += nums[k];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

// Optimal approach ( Kadane's Algorithm )
function maxSubarraySum_3(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
    if(sum < 0) sum = 0;
  }
  return maxSum;
}