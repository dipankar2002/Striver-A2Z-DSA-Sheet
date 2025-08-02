# 🧠 Second Largest Element in an Array

## 🧩 Problem Statement
Given an array of integers nums, return the second largest element.
If the second largest does not exist (e.g., only one unique element), return -1.

---

## 💡 Hint
- Sort the array and pick the second last element (but not efficient).
- Or, find the largest and then find the next largest that's not equal to it.
- Or, track both largest and second largest in a single pass.

---

## 🔁 Brute Force Approach (Using Sort)

### ✅ Pseudo Code
```js
FUNCTION secondLargestElement_1(nums):
    IF array has 0 or 1 element:
        RETURN -1
    SORT the array in ascending order
    RETURN nums[length - 2]
```
#### Complexity:
- Time - **O(n log n)** (due to sorting)
- Space - **O(1)**
#### 💡 Explanation
- Sorting arranges elements.
- Second largest will be at second last index.
- Simple, but full sort is unnecessary for this task.

---

## 🔁 Better Approach (Two Pass Linear)

### ✅ Pseudo Code
```js
FUNCTION secondLargestElement_2(nums):
    IF array has 0 or 1 element:
        RETURN -1
    SET large = -∞
    SET second_large = -∞

    // First pass to find the largest
    FOR each element in nums:
        large = max(large, element)

    // Second pass to find second largest
    FOR each element in nums:
        IF element ≠ large AND element > second_large:
            second_large = element

    RETURN second_large
```
#### Complexity:
- Time - **O(n)** (two linear scans)
- Space - **O(1)**
#### 💡 Explanation
- First loop finds the max.
- Second loop finds the next max smaller than the largest.
- More efficient than sorting.

---

## 📐 Optimal Approach (One Pass Linear)

### ✅ Pseudo Code
```js
FUNCTION secondLargestElement_3(nums):
    IF array has less than 2 elements:
        RETURN -1
    SET large = -∞
    SET second_large = -∞

    FOR each element in nums:
        IF element > large:
            second_large = large
            large = element
        ELSE IF element > second_large AND element ≠ large:
            second_large = element

    RETURN second_large
```
#### Complexity:
- Time - **O(n)** (single pass)
- Space - **O(1)**
#### 💡 Explanation
- Track both largest and second largest in one loop.
- Update second_large only when necessary.
- Most efficient solution.

---

#### ⚠️ Notes
- All approaches assume array contains at least 2 unique elements.
- If all elements are the same, or array size is less than 2, return -1.
- This logic works for negative numbers as well.