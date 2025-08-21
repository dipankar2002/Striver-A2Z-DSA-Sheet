# 📏 Check if an Array is Sorted

## 🧩 Problem Statement
Given an array of integers nums, check whether the array is sorted in non-decreasing order (i.e., every element is greater than or equal to the previous one).
Return true if sorted, otherwise false.

---

## 💡 Hint
- Compare each pair of elements and check if the current element is smaller than the previous.
- If so, it's not sorted.

---

## 🔁 Brute Force Approach (Using Two Loops)

### ✅ Pseudo Code
```js
FUNCTION isSorted_1(nums):
    FOR i = 0 to nums.length - 1:
        FOR j = i + 1 to nums.length - 1:
            IF nums[j] < nums[i]:
                RETURN false
    RETURN true
```
#### Complexity:
- Time - **O(n²)** (nested loops)
- Space - **O(1)**
#### 💡 Explanation
- Compares every element i with all elements j > i.
- If any element is found smaller than a previous one, the array is not sorted.
- Simple but inefficient for large arrays.

---

## 📐 Optimal Approach (Single Loop)

### ✅ Pseudo Code
```js
FUNCTION isSorted_2(nums):
    FOR i = 1 to nums.length - 1:
        IF nums[i] < nums[i - 1]:
            RETURN false
    RETURN true
```
#### Complexity:
- Time - **O(n)** (one linear pass)
- Space - **O(1)**
#### 💡 Explanation
- Compares each element with the one before it.
- As soon as a smaller element is found, return false.
- Efficient and clean.

---

#### ⚠️ Notes
- Works for empty or single-element arrays (returns true).
- This logic checks for non-decreasing order.<br>
If you want to check for strictly increasing, use:
```js
if (nums[i] <= nums[i - 1]) return false;
```