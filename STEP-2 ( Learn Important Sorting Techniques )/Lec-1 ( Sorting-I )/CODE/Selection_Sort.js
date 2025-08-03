
// Selection Sort Algorithm

function selectionSort(nums) {
  let n = nums.length; // Get the length of the array
  
  // Outer loop: iterate from the first element to the second last
  for (let i = 0; i < n - 1; i++) {
    // Inner loop: iterate from the current i to the end of the array
    for (let k = i; k < n; k++) {
      // If the current element at i is greater than the element at k
      // Then swap them to bring the smaller element to position i
      if (nums[i] > nums[k]) {
        // Swapping using array destructuring
        [ nums[i], nums[k] ] = [ nums[k], nums[i] ];
      }
    }
  }
  // Return the sorted array
  return nums;
}