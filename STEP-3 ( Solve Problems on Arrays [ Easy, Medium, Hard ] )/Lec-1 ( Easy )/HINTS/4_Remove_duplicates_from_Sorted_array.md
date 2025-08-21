# 🧹 Remove Duplicates In-Place from Sorted Array

## 🧩 Problem Statement
Given a sorted array of integers nums, remove the duplicate elements in-place such that each element appears only once.
Return the new length of the array after duplicates are removed.

> 📌 Do not use extra space for another array — modify the input array in-place.

---

## 💡 Hint
- Use a Set to remove duplicates, but it uses extra space.
- Two-pointer technique can solve it in-place efficiently.

---

## 🐢 Brute Force Approach (Using Set)

### ✅ Pseudo Code
```js
FUNCTION removeDuplicates_1(nums):
    SET set = new Set(nums)
    SET uniqueNums = Array from set
    FOR i = 0 to uniqueNums.length:
        nums[i] = uniqueNums[i]
    RETURN uniqueNums.length
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** (due to the Set and new array)
#### 💡 Explanation
- Converts array to Set to remove duplicates (since Set stores only unique values).
- Copies back to the original array.
- Not in-place, violates space constraint of the problem.

---

## ⚡ Optimal Approach (Two Pointers)

### ✅ Pseudo Code
```js
FUNCTION removeDuplicates_2(nums):
    SET left = 0
    FOR right = 0 to nums.length - 1:
        IF nums[right] ≠ nums[left]:
            INCREMENT left
            SET nums[left] = nums[right]
    RETURN left + 1
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Since the array is sorted, duplicates will be adjacent.
- Use two pointers:
  - **left** tracks the position of the last unique element.
  - **right** scans the array.
- When a new unique element is found, move **left** and update **nums[left]**.

---

#### ⚠️ Notes
- Assumes input array is already sorted.
- Result is the count of unique elements; the array is modified up to that length.
- To get the modified array:<br>
**nums.slice(0, newLength)**