// Longest Consecutive Sequence in an Array

// Brute force approach
function longestConsecutive_1(nums) {
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    let x = nums[i];
    while (search(nums, x + 1)) {
      x++;
      count++;
    }
    max = Math.max(max, count);
  }
  return max;
}
function search(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) return true;
  }
  return false;
}

// Better approach
function longestConsecutive_2(nums) {
  nums.sort();
  let max = 1;
  let count = 0;
  let last_small = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 === last_small) {
      count++;
      last_small = nums[i];
    } else if (nums[i] !== last_small) {
      count = 1;
      last_small = nums[i];
    }
    max = Math.max(max, count);
  }
  return max;
}

// Optimal approach
function longestConsecutive_3(nums) {
  let max = 1;
  let set = new Set();

  // put all the array elements into set
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  // Find the longest sequence
  for (let it of set) {
    // if 'it' is a starting number
    if (!set.has(it - 1)) {
      // find consecutive numbers
      let cnt = 1;
      let x = it;
      while (set.has(x + 1)) {
        x = x + 1;
        cnt = cnt + 1;
      }
      max = Math.max(max, cnt);
    }
  }
  return max;
}