# 🔄 Left Rotate an Array by One Place

## 🧩 Problem Statement
Given an array nums, rotate the array to the left by one position.
That means, move each element one step to the left, and move the first element to the end.

```markdown
**Example:**
- Input: [1, 2, 3, 4, 5]
- Output: [2, 3, 4, 5, 1]
```

---

## 💡 Hint
- Use a temporary array to copy elements.
- Or do it in-place by shifting elements and storing the first element.

---

## 🐌 Brute Force Approach (Using Extra Space)

### ✅ Pseudo Code
```js
FUNCTION rotateArrayByOne_1(nums):
    CREATE temp array of size nums.length
    FOR i = 1 to nums.length - 1:
        temp[i - 1] = nums[i]
    temp[nums.length - 1] = nums[0]
    COPY all elements from temp back to nums
    RETURN nums
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** (uses extra array)
#### 💡 Explanation
- Store all elements starting from index 1 in a new array, shifted left by 1.
- Put the first element at the last index.
- Copy it back to the original array.

---

## ⚡ Optimal Approach (In-Place)

### ✅ Pseudo Code
```js
FUNCTION rotateArrayByOne_2(nums):
    STORE nums[0] in temp
    FOR i = 1 to nums.length - 1:
        nums[i - 1] = nums[i]
    nums[nums.length - 1] = temp
    RETURN nums
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Store the first element in a temporary variable.
- Shift all elements one position to the left.
- Place the saved element at the last position.
- Efficient and done in-place.

---

#### ⚠️ Notes
- Both approaches modify the original array.
- Works on arrays with any data type (integers, strings, etc.).
- If the array has only one element, it remains unchanged.