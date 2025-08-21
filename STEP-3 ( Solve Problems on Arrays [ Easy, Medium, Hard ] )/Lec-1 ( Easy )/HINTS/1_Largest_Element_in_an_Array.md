# 🧠 Find the Largest Element in an Array

## 🧩 Problem Statement
Given an array of integers nums, find and return the largest element in the array.

---

## 💡 Hint
- Use sorting to bring the largest number to the end.
- Or, iterate and track the maximum number manually.

---

## 🚀 Brute Force Approach (Using Sort)

### ✅ Pseudo Code
```js
FUNCTION largestElement_1(nums):
    SORT the array in ascending order
    RETURN last element of the array (nums[length - 1])
```
#### Complexity:
- Time - **O(n log n)** (due to sorting)
- Space - **O(1)**
#### 💡 Explanation
- Sorting puts the largest element at the end.
- Simple but inefficient since full sort is not required for just the max element.

---

## 📐 Optimal Approach (Using Linear Search)

### ✅ Pseudo Code
```js
FUNCTION largestElement_2(nums):
    SET max = nums[0]
    FOR i = 0 to length of nums:
        IF nums[i] > max:
            SET max = nums[i]
    RETURN max
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Traverse the array once.
- Keep updating the maximum value found so far.
- Efficient and requires no extra space.

---

#### ⚠️ Notes
- Ensure the input array is non-empty.
- For arrays with negative numbers or mixed values, this logic still works correctly.