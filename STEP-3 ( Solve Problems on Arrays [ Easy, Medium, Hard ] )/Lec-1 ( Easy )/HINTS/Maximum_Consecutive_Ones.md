# 🔗 Count Maximum Consecutive One's in an Array

## 🧩 Problem Statement
Given a binary array (only 0s and 1s), find the maximum number of consecutive 1's.

```
**Example:**
- Input: [1, 1, 0, 1, 1, 1]
- Output: 3
```

---

## 💡 Hint
- Use a counter to track the current sequence of 1s.
- Reset the counter when a 0 is found.
- Keep track of the maximum count seen so far.

---

## ⚡ Optimal Approach – 1 (Using Counter Reset Logic)
### ✅ Pseudo Code
```js
FUNCTION findMaxConsecutiveOnes_1(nums):
    SET max = 0
    SET count = 0
    FOR i = 0 TO nums.length - 1:
        IF nums[i] == 1:
            INCREMENT count
        ELSE:
            RESET count to 0
        SET max = MAX(max, count)
    RETURN max
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Traverse the array and count consecutive 1's.
- When a 0 is found, reset the count to 0.
- Track the maximum count using **Math.max()**.

---

## ⚡ Optimal Approach – 2 (Two Pointers Logic)
### ✅ Pseudo Code
```js
FUNCTION findMaxConsecutiveOnes_2(nums):
    SET max = 0
    SET i = 0
    FOR k = 0 TO nums.length:
        IF nums[k] != 1:
            SET max = MAX(max, k - i)
            SET i = k + 1
    RETURN max
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- **i** marks the start of a sequence of 1s.
- When a 0 is found, calculate the length of the previous 1s block using **k - i**.
- Update **max** accordingly and move **i** to the next index.
- Also works even if the last element is 1 (due to loop running till **nums.length**).

---

#### ⚠️ Notes
- Both approaches are efficient and run in linear time.
- Use the first approach for clarity.
- Use the second approach when working with sliding window-style problems.