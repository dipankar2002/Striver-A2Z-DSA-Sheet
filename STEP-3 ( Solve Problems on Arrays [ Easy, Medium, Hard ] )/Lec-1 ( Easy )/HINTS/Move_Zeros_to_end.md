# 🧹 Move All Zeros to the End of the Array

## 🧩 Problem Statement
Given an array nums, move all 0 elements to the end while maintaining the relative order of the non-zero elements.
Do it in-place with minimal operations if possible.

```
**Example:**
- Input: [0, 1, 0, 3, 12]
- Output: [1, 3, 12, 0, 0]
```

---

## 💡 Hint
- Use a temporary array to collect non-zero elements.
- Or, use a two-pointer technique to shift and swap non-zeros in-place.

---

## 🐢 Brute Force Approach (Using Temporary Array)
### ✅ Pseudo Code
```js
FUNCTION moveZeroes_1(nums):
    CREATE empty array temp
    FOR i = 0 to nums.length - 1:
        IF nums[i] ≠ 0:
            temp.push(nums[i])
    FOR i = 0 to temp.length - 1:
        nums[i] = temp[i]
    FOR i = temp.length to nums.length - 1:
        nums[i] = 0
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** (temporary array)
#### 💡 Explanation
- Copies all non-zero elements to a new array.
- Writes them back to the start of **nums**, then fills the rest with zeros.
- Maintains relative order of non-zero elements.
- Not in-place due to extra space.

---

## ⚡ Optimal Approach (Two Pointers / In-Place Swap)
### ✅ Pseudo Code
```js
FUNCTION moveZeroes_2(nums):
    SET i = 0
    FOR k = 0 to nums.length - 1:
        IF nums[k] ≠ 0:
            SWAP nums[i] and nums[k]
            INCREMENT i
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Pointer **i** keeps track of the position to place the next non-zero.
- As you iterate (**k**), when a non-zero is found, swap it to index **i** and move **i** forward.
- Zeros are automatically pushed to the end by swapping.

---

#### ⚠️ Notes
- Maintains the relative order of non-zero elements.
- Works even when array contains only 0s or no 0s at all.
- This is a commonly asked interview question due to in-place operation requirement.