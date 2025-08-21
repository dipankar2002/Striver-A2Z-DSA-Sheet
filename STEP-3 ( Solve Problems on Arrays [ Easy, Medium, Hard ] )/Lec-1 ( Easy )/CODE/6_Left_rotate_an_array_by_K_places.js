
// Rotate array by K elements

// Brute force Approach
function rotateArrayLeft_1(nums, k) {
  const n = nums.length;
  if (n === 0) return;

  k = k % n; // Handle if k > n
  if (k > n) return;

  // Step 1: Store first k elements in temp array
  const temp = [];
  for (let i = 0; i < k; i++) {
    temp.push(nums[i]);
  }
  // Step 2: Shift remaining elements to the left
  for (let i = 0; i < n - k; i++) {
    nums[i] = nums[i + k];
  }
  // Step 3: Copy temp elements to the end
  for (let i = n - k; i < n; i++) {
    nums[i] = temp[i - (n - k)];
  }
  return nums;
}
function rotateArrayRight_1(nums, k) {
  const n = nums.length;
  if (n === 0) return;
  
  k = k % n; // To handle cases where k > n
  if (k > n) return;
  
  // Step 1: Store last k elements in temp array
  const temp = [];
  for (let i = n - k; i < n; i++) {
    temp.push(nums[i]);
  }
  // Step 2: Shift remaining elements to the right
  for (let i = n - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }
  // Step 3: Copy temp elements back to start
  for (let i = 0; i < k; i++) {
    nums[i] = temp[i];
  }
  return nums;
}


// Optimal Approach
function rotateArrayLeft_2(nums, k) {
  const n = nums.length;
  // Reverse first k elements
  Reverse(nums, 0, k - 1);
  // Reverse last n-k elements
  Reverse(nums, k , n - 1);
  // Reverse whole array
  Reverse(nums, 0, n - 1);
  return nums;
}
function rotateArrayRight_2(nums, k) {
  const n = nums.length;
  // Reverse first n-k elements
  Reverse(nums, 0, n - k - 1);
  // Reverse last k elements
  Reverse(nums, n - k, n - 1);
  // Reverse whole array
  Reverse(nums, 0, n - 1);
  return nums;
}
// The Reverse Function
function Reverse(arr, start, end) {
  while (start <= end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
}