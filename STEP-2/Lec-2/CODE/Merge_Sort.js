
// Merge Sort Algorithm

function mergeSort(nums, low, high) {
  // Base condition: If the subarray has only one element or is invalid, return
  if (low >= high) return;
  // Find the middle index (to divide the array into two halves)
  let mid = Math.floor((low + high) / 2);

  // Recursively sort the left half of the array
  mergeSort(nums, low, mid);
  // Recursively sort the right half of the array
  mergeSort(nums, mid + 1, high);

  // Merge the two sorted halves
  merge(nums, low, mid, high);
}

function merge(nums, low, mid, high) {
  let temp = [];       // Temporary array to store the merged sorted elements
  let left = low;      // Starting index of the left subarray
  let right = mid + 1; // Starting index of the right subarray

  // Merge elements from both subarrays into `temp` in sorted order
  while (left <= mid && right <= high) {
    if (nums[left] <= nums[right]) {
      temp.push(nums[left]); // If left is smaller, add it to temp
      left++;
    } else {
      temp.push(nums[right]); // If right is smaller, add it to temp
      right++;
    }
  }

  // Copy any remaining elements from the left subarray
  while (left <= mid) {
    temp.push(nums[left]);
    left++;
  }

  // Copy any remaining elements from the right subarray
  while (right <= high) {
    temp.push(nums[right]);
    right++;
  }

  // Copy all sorted elements from temp back to the original array
  for (let i = low; i <= high; i++) {
    nums[i] = temp[i - low]; // `i - low` gives the correct index in temp
  }
}