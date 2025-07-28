# 📥 Insertion Sort Algorithm

## 🧩 Problem Statement
Given an array of integers nums[], sort the array in ascending order using the Insertion Sort algorithm.

---

## 💡 Hint
- Insertion Sort works similarly to sorting playing cards in your hand.
- It builds the final sorted array one element at a time by inserting the current element into its correct position in the sorted part of the array.

---

## 🛠️ Approach: Insertion Sort

### ✅ Pseudo Code
```js
FUNCTION insertionSort(nums):
    n = length of nums
    FOR i FROM 0 TO n - 1:
        SET k = i
        WHILE k > 0 AND nums[k-1] > nums[k]:
            SWAP nums[k], nums[k-1]
            DECREMENT k
    RETURN nums
```
### ✅ JavaScript Implementation
```js
function insertionSort(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let k = i;
    while (k > 0 && nums[k - 1] > nums[k]) {
      [ nums[k - 1], nums[k] ] = [ nums[k], nums[k - 1] ];
      k--;
    }
  }
  return nums;
}
```
#### Complexity:
- Time - **O(n)** for [ **Best** ], **O(n²)** for [ **Average**, **Worst** ] cases
- Space - **O(1)**

> - Best Case: Already sorted array, only comparisons — no swaps.
> - Worst Case: Reverse-sorted array, every element must be compared and moved.

#### 💡 Explanation
- Loop starts from the first index and treats the first part of the array as sorted.
- The current element (nums[i]) is inserted into its correct position among the previous elements.
- Elements greater than the current one are shifted right.
- Swapping continues backward until the correct spot is found.

---

#### ⚠️ Notes
- Stable sort: Maintains relative order of equal elements.
- In-place sort: No extra memory is used.
- Performs well on small datasets or nearly sorted arrays.
- Often used in hybrid sorting algorithms like TimSort for small segments.