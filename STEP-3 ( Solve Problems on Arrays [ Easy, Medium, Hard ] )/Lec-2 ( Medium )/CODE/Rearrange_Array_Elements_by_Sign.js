// Rearrange the array in alternating positive and negative items

// Brute force approach
function rearrangeArray_1(nums) {
  let pos = [];
  let neg = [];

  // Segregate the array into positives and negatives.
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      pos.push(nums[i]);
    } else {
      neg.push(nums[i]);
    }
  }
  // Positives on even indices, negatives on odd.
  for (let i = 0; i < n / 2; i++) {
    nums[2 * i] = pos[i];
    nums[2 * i + 1] = neg[i];
  }
  return nums;
}

// Optimal approach
function rearrangeArray_2(nums) {
  let n = nums.length;
  let res = new Array();
  let pIndex = 0;
  let nIndex = 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      res[pIndex] = nums[i];
      pIndex += 2;
    } else {
      res[nIndex] = nums[i];
      nIndex += 2;
    }
  }
  return res;
}

// Veriety - 2
function rearrangeArray_3(nums) {
  let n = nums.length;
  // Define 2 arrays, one for storing positive
  // and other for negative elements of the array.
  let pos = [];
  let neg = [];
  // Segregate the array into positives and negatives.
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) pos.push(nums[i]);
    else neg.push(nums[i]);
  }
  // If positives are lesser than the negatives.
  if (pos.length < neg.length) {
    // First, fill array alternatively till the point
    // where positives and negatives are equal in number.
    for (let i = 0; i < pos.length; i++) {
      nums[2 * i] = pos[i];
      nums[2 * i + 1] = neg[i];
    }
    // Fill the remaining negatives at the end of the array.
    let index = pos.length * 2;
    for (let i = pos.length; i < neg.length; i++) {
      nums[index] = neg[i];
      index++;
    }
  }
  // If negatives are lesser than the positives.
  else {
    // First, fill array alternatively till the point
    // where positives and negatives are equal in number.
    for (let i = 0; i < neg.length; i++) {
      nums[2 * i] = pos[i];
      nums[2 * i + 1] = neg[i];
    }
    // Fill the remaining positives at the end of the array.
    let index = neg.length * 2;
    for (let i = neg.length; i < pos.length; i++) {
      nums[index] = pos[i];
      index++;
    }
  }
  return nums;
}
