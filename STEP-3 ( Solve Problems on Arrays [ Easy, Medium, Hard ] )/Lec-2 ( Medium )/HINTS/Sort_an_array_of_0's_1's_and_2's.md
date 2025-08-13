# 🔄 Sort an Array of 0s, 1s and 2s

## 🧩 Problem Statement
Given an array **nums** consisting of only **0s**, **1s**, and **2s**, sort the array in-place such that all **0s** come first, followed by all **1s**, then all **2s**.

```markdown
**Example:**
- Input:  nums = [2, 0, 2, 1, 1, 0]
- Output: [0, 0, 1, 1, 2, 2]
```

---

## 💡 Hint
- Brute force: use built-in sort.
- Better: count the number of 0s, 1s, and 2s, then overwrite.
- Optimal: use **Dutch National Flag Algorithm** with three pointers.

---

## 🧱 Brute Force – Use Built-in Sort
### ✅ Pseudo Code
```js
FUNCTION sortZeroOneTwo_1(nums):
    CALL nums.sort()
    RETURN nums
```
#### Complexity:
- Time - ** O(n log n)**
- Space - **O(1)**
#### 💡 Explanation
- Relies on built-in sort.
- Not optimal because the array has only 3 distinct values.

---

## 🧠 Better Approach – Counting Elements
### ✅ Pseudo Code
```js
FUNCTION sortZeroOneTwo_2(nums):
    SET count_0 = 0, count_1 = 0, count_2 = 0
    FOR each num in nums:
        INCREMENT respective counter

    OVERWRITE first count_0 elements with 0
    THEN overwrite next count_1 elements with 1
    FINALLY overwrite remaining with 2
    RETURN nums
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- First counts how many 0s, 1s, and 2s.
- Then fills array in order.
- Stable and easy, but requires 2 passes.

---

## ⚡ Optimal – Dutch National Flag Algorithm
### ✅ Pseudo Code
```js
FUNCTION sortZeroOneTwo_3(nums):
    SET low = 0, mid = 0, high = n - 1
    WHILE mid <= high:
        IF nums[mid] == 0:
            SWAP nums[low] with nums[mid]
            INCREMENT low, mid
        ELSE IF nums[mid] == 1:
            INCREMENT mid
        ELSE:
            SWAP nums[mid] with nums[high]
            DECREMENT high
    RETURN nums
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Uses three pointers:
    - **low** → boundary between 0s and 1s
    - **mid** → current index
    - **high** → boundary between 1s and 2s
- In-place and single-pass.

---

#### ⚠️ Notes
- Problem is also known as the Dutch National Flag Problem.
- Most optimal approach is Dutch National Flag, used frequently in interviews.
- Works only when elements are exactly 0, 1, and 2.