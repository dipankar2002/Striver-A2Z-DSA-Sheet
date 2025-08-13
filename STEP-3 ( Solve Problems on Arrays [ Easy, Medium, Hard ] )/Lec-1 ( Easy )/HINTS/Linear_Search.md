# 🔍 Linear Search in an Array

## 🧩 Problem Statement
Given an array nums and a target value k, search for the value in the array.
Return the index of the first occurrence of k if found, otherwise return -1.

```markdown
**Example:**
- Input: nums = [4, 2, 7, 1, 3], k = 7
- Output: 2
```

---

## 💡 Hint
- Iterate through the array and compare each element with k.
- If match is found, return its index.
- If not found after full scan, return -1.

---

## 🚶 Brute Force Approach (Linear Scan)
### ✅ Pseudo Code
```js
FUNCTION linearSearch_1(nums, k):
    FOR i = 0 to nums.length - 1:
        IF nums[i] == k:
            RETURN i
    RETURN -1
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Loop through each element of the array.
- As soon as the target k is found, return the index.
- If the loop ends without a match, return -1.
- Simple and works for unsorted arrays.

---

#### ⚠️ Notes
- Works for any data type: numbers, strings, etc.
- If there are multiple occurrences, only the first index is returned.
- If the array is very large and performance matters, consider binary search (only for sorted arrays).