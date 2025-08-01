
// Quick Sort Algorithm

function quickSort(nums, low, high) {
  // Base case: Only sort if low is less than high (at least 2 elements)
  if (low < high) {
    // Partition the array and get the pivot index
    const pIndex = partition(nums, low, high);

    // Recursively sort elements before the pivot
    quickSort(nums, low, pIndex - 1);

    // Recursively sort elements after the pivot
    quickSort(nums, pIndex + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[low];  // Select the first element as the pivot
  let i = low;           // Start pointer from left
  let k = high;          // End pointer from right

  // Repeat until both pointers cross
  while (i < k) {
    // Move 'i' forward until you find an element greater than pivot
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    // Move 'k' backward until you find an element less than or equal to pivot
    while (arr[k] > pivot && k >= low + 1) {
      k--;
    }

    // Swap arr[i] and arr[k] if i < k
    if (i < k) {
      [ arr[i], arr[k] ] = [ arr[k], arr[i] ];
    }
  }

  // Swap pivot with the correct position (arr[k])
  [ arr[low], arr[k] ] = [ arr[k], arr[low] ];

  // Return the index of the pivot after placement
  return k;
}
