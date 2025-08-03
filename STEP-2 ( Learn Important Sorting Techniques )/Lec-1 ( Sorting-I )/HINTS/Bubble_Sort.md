# 🔁 Bubble Sort Algorithm

## 🧩 Problem Statement
Given an array of integers nums[], sort it in ascending order using the Bubble Sort algorithm.

---

## 💡 Hint
- Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order.
- After each full pass, the largest element bubbles up to the end.
- The optimized version can detect if the array is already sorted and exit early.

---

## 🔁 Brute Force Approach (Simple Bubble Sort)

### ✅ Pseudo Code
```js
FUNCTION bubbleSort_1(nums):
    n = length of nums
    FOR i FROM n-1 TO 0:
        FOR k FROM 0 TO i-1:
            IF nums[k] > nums[k+1]:
                SWAP nums[k], nums[k+1]
    RETURN nums
```
### ✅ JavaScript Implementation
```js
function bubbleSort_1(nums) {
  let n = nums.length;
  for (let i = n - 1; i >= 0; i--) {
    for (let k = 0; k < i; k++) {
      if (nums[k] > nums[k + 1]) {
        [ nums[k], nums[k + 1] ] = [ nums[k + 1], nums[k] ];
      }
    }
  }
  return nums;
}
```
#### Complexity:
- Time - **O(n²)** for all cases [ **Best**, **Average**, **Worst** ]
- Space - **O(1)**

#### 💡 Explanation
- Compare each pair of adjacent elements.
- If they are out of order, swap them.
- After the first pass, the largest element is at the end.
- Repeat the process, ignoring the last sorted elements in each pass.

---

## ⚡ Optimal Approach (Early Exit with Swap Flag)

### ✅ Pseudo Code
```js
FUNCTION bubbleSort_2(nums):
    n = length of nums
    FOR i FROM n-1 TO 0:
        didSwap = false
        FOR k FROM 0 TO i-1:
            IF nums[k] > nums[k+1]:
                SWAP nums[k], nums[k+1]
                didSwap = true
        IF didSwap == false:
            BREAK
    RETURN nums
```
### ✅ JavaScript Implementation
```js
function bubbleSort_2(nums) {
  let n = nums.length;

  for (let i = n - 1; i >= 0; i--) {
    let didSwap = 0;
    for (let k = 0; k < i; k++) {
      if (nums[k] > nums[k + 1]) {
        [ nums[k], nums[k + 1] ] = [ nums[k + 1], nums[k] ];
        didSwap = 1;
      }
    }
    if (didSwap === 0) {
      break;
    }
  }
  return nums;
}
```
#### Complexity:
- Time - **O(n)** for [ **Best** ], **O(n²)** for [ **Average**, **Worst** ] cases
- Space - **O(1)**

#### 💡 Explanation
- Worst-case: when the array is sorted in reverse, many swaps are needed.
- Best-case (Optimal Only): if array is already sorted, the didSwap flag helps exit early in O(n).

---

#### ⚠️ Notes
- Stable sort: It maintains the relative order of equal elements.
- Good for teaching and understanding sorting logic, but inefficient for large datasets.
- Use the optimal version when possible for early exit on sorted arrays.