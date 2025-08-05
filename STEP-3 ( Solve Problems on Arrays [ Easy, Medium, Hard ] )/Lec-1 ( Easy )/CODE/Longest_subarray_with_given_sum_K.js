// Longest Subarray with given Sum K(Positives)

// Brute Force approach - 1
function longestSubarray_1(nums, K) {
  let n = nums.length; // size of the array
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // starting index
    for (let j = i; j < n; j++) {
      // ending index
      // add all the elements of subarray = nums[i...j]
      let s = 0;
      for (let K = i; K <= j; K++) {
        s += nums[K];
      }
      if (s === K) maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
}

// Brute Force approach - 2
function longestSubarray_2(nums, K) {
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      // If sum > K break the loop
      if (sum > K) break;
      // if sum = K compare with the max length
      if (sum === K) maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
}

// Better approach
function longestSubarray_3(nums, K) {
  let n = nums.length;
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

    // calculate the sum of remaining part i.e. x - K
    let rem = sum - K;
    // calculate the length and update maxLen
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    // update the map checking the conditions
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }
  return maxLen;
}

// Optimal approach
function longestSubarray_4(nums, K) {
  let maxLen = 0;
  let sum = nums[0];
  let left = 0, right = 0;
  while(right < nums.length) {
    // if sum > k, reduce the subarray from left
    // until sum becomes less or equal to k
    while(left <= right && sum > K) {
      sum -= nums[left];
      left++;
    }
    // if sum = K, update the maxLen i.e. answer
    if (sum === K) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    // Move forward the right pointer
    right++;
    if (right < n) sum += a[right];
  }
  return maxLen;
}