
// Bubble Sort Algorithm

// Bubble Sort Algorithm - Brute Force
function bubbleSort_1(nums) {
  let n = nums.length; // Get the length of the array

  // Outer loop: runs from end of array down to start
  // Each pass moves the largest element to its correct position at the end
  for (let i = n - 1; i >= 0; i--) {
    // Inner loop: compares adjacent elements and swaps if needed
    for (let k = 0; k < i; k++) {
      // If current element is greater than next one, swap them
      if (nums[k] > nums[k + 1]) {
        // Swapping using array destructuring 
        [ nums[k], nums[k + 1] ] = [ nums[k + 1], nums[k] ];
      }
    }
  }
  return nums; // Return sorted array
}

// Bubble Sort Algorithm - Optimal (Better) Approach
function bubbleSort_2(nums) {
  let n = nums.length;

  // Outer loop: just like before, each pass pushes the largest number to the end
  for (let i = n - 1; i >= 0; i--) {
    let didSwap = 0; // Flag to check if any swap happened in this pass
    // Inner loop: compare adjacent elements
    for (let k = 0; k < i; k++) {
      if (nums[k] > nums[k + 1]) {
        // Swapping using array destructuring 
        [nums[k], nums[k + 1]] = [nums[k + 1], nums[k]];
        didSwap = 1; // Mark that we did a swap
      }
    }
    // If no swap happened in the entire pass, array is already sorted
    if (didSwap === 0) {
      break; // Exit early (optimization)
    }
  }
  return nums; // Return sorted array
}