// Longest Subarray with sum K | [Postives and Negatives]

// Brute force approach - 1
function getLongestSubarray_1(nums, K) {
  let n = nums.length; // size of the array
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // starting index
    for (let j = i; j < n; j++) {
      // ending index
      // add all the elements of subarray = nums[i...j]
      let sum = 0;
      for (let K = i; K <= j; K++) {
        sum += nums[K];
      }
      if (sum === K) maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
}

// Brute Force approach - 2
function getLongestSubarray_2(nums, K) {
  let n = nums.length; // size of the array
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // starting index
    let sum = 0;
    for (let j = i; j < n; j++) {
      // ending index
      // add the current element to the subarray nums[i...j-1]
      sum += nums[j];
      if (sum === K) maxLen = Math.max(len, j - i + 1);
    }
  }
  return maxLen;
}

// Optimal approach
function getLongestSubarray_3(nums, K) {
  let n = nums.length; // size of the array
  let preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // calculate the prefix sum till index i
    sum += nums[i];
    // if the sum = K, update the maxLen
    if (sum === K) {
      maxLen = Math.max(maxLen, i + 1);
    }

    // calculate the sum of remaining part i.e. x-K
    let rem = sum - K;
    // calculate the length and update maxLen
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    // finally, update the map checking the conditions
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }
  return maxLen;
}