
// Move all Zeros to the end of the array

// Using Map Approach
function unionArray_1(nums1, nums2) {
  let map = new Map();
  nums1.forEach(ele => {
    if(!map.hasOwnProperty(ele)) map[ele] = ele;
  });
  nums2.forEach(ele => {
    if(!map.hasOwnProperty(ele)) map[ele] = ele;
  });
  return Object.values(map);
}

// Using Set Approach
function unionArray_2(nums1, nums2) {
  let set = new Set();
  nums1.forEach(ele => {
    set.add(ele);
  })
  nums2.forEach(ele => {
    set.add(ele);
  })
  return Array.from(set);
}

// Optimal Approach
function unionArray_3(nums1, nums2) {
  let i = 0, j = 0; // Pointers
  let union = []; // Union array

  while(i < nums1.length && j < nums2.length) {
    if(nums1[i] <= nums2[j]) { // Case 1 and 2
      if(union.length === 0 || union[union.length - 1] !== nums1[i]) {
        union.push(nums1[i]);
      }
      i++;
    } else { // Case 3
      if(union.length === 0 || union[union.length - 1] !== nums2[j]) {
        union.push(nums2[j]);
      }
      j++;
    }
  }

  while(i < nums1.length) { // If any elements left in nums1
    if(union[union.length - 1] !== nums1[i]) {
      union.push(nums1[i]);
    }
    i++;
  }

  while(j < nums2.length) { // If any elements left in nums2
    if(union[union.length - 1] !== nums2[j]) {
      union.push(nums2[j]);
    }
    j++;
  }

  return union;
}