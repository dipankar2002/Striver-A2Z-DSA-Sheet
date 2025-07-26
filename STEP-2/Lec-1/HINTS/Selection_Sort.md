# 🔄 Selection Sort Algorithm

## 🧩 Problem Statement
Given an array of integers nums[], sort the array in ascending order using the Selection Sort algorithm.

---

## 💡 Hint
- Selection Sort works by repeatedly selecting the minimum element from the unsorted part and placing it at the beginning.
- It divides the array into two parts: sorted and unsorted.
- Swap only when a smaller element is found in the rest of the array.

---

## 🛠️ Approach: Selection Sort

### ✅ Pseudo Code
```js
FUNCTION selectionSort(nums):
    SET n = length of nums
    FOR i FROM 0 TO n - 2:
        FOR k FROM i TO n - 1:
            IF nums[i] > nums[k]:
                SWAP nums[i] and nums[k]
    RETURN nums
```
### ✅ JavaScript Implementation
```js
function selectionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let k = i; k < n; k++) {
      if (nums[i] > nums[k]) {
        [ nums[i], nums[k] ] = [ nums[k], nums[i] ];
      }
    }
  }
  return nums;
}
```
#### Complexity:
- Time - **O(n²)** for all cases [ **Best**, **Average**, **Worst** ]
- Space - **O(1)**

> - No extra space is used — sorting is done in-place.
> - Suitable for small datasets or when memory is limited.

#### 💡 Explanation
- Start with the first element (index i).
- Look for the smallest element from index i to the end of the array.
- Swap it with the element at index i.
- Repeat for all positions until the array is sorted.

>💡 This version checks and swaps inside the inner loop.
The optimized version usually keeps track of the minimum index and swaps only once after the inner loop ends.

---

#### ⚠️ Notes
- Not stable: Equal elements may get reordered.
- Easy to understand but inefficient for large arrays.
- Good for learning basic sorting techniques.