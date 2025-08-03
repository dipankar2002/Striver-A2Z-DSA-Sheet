
// Insertion Sort Algorithm

function insertionSort(nums) {
  let n = nums.length; // Get the length of the array

  // Outer loop: Traverse the array from left to right
  for (let i = 0; i < n; i++) {
    let k = i;
    // Inner loop: Compare the current element with all its previous elements
    // and shift the elements if the current element is smaller
    while (k > 0 && nums[k - 1] > nums[k]) {
      // Swap nums[k] and nums[k-1] using array destructuring
      [ nums[k - 1], nums[k] ] = [ nums[k], nums[k - 1] ];
      k--; // Move one step back and check again
    }
  }
  // Return the sorted array
  return nums;
}