# ⚡ Kadane’s Algorithm – Maximum Subarray Sum

## 🧩 Problem Statement
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum, and return its sum.

```
**Example:**
- Input:  nums = [-2,1,-3,4,-1,2,1,-5,4]
- Output: 6
- Explanation: [4,-1,2,1] has the largest sum = 6.
```

---

## 💡 Hint
- Brute force: Check all possible subarrays.
- Better: Avoid third loop by keeping running sum.
- Optimal: Use **Kadane’s Algorithm** (track current + max sum).

---

## 🧱 Brute Force – Try Every Subarray
### ✅ Pseudo Code
```js
FUNCTION maxSubarraySum_1(nums):
    SET maxSum = -∞
    FOR i = 0 TO n-1:
        FOR j = i TO n-1:
            SET sum = 0
            FOR k = i TO j:
                sum += nums[k]
            maxSum = MAX(maxSum, sum)
    RETURN maxSum
```
#### Complexity:
- Time - **O(n³)**
- Space - **O(1)**
#### 💡 Explanation
- Triple nested loop:
    - Outer 2 for all subarrays.
    - Innermost loop computes sum.
- Extremely slow for large arrays.

---

## 🧠 Better Approach – Prefix Sum Style
### ✅ Pseudo Code
```js
FUNCTION maxSubarraySum_2(nums):
    SET maxSum = -∞
    FOR i = 0 TO n-1:
        SET sum = 0
        FOR j = i TO n-1:
            sum += nums[j]
            maxSum = MAX(maxSum, sum)
    RETURN maxSum
```
#### Complexity:
- Time - **O(n²)**
- Space - **O(1)**
#### 💡 Explanation
- Avoids innermost loop by maintaining sum while iterating.
- Still not optimal, but better than brute force.

---

## ⚡ Optimal – Kadane’s Algorithm
### ✅ Pseudo Code
```js
FUNCTION maxSubarraySum_3(nums):
    SET maxSum = -∞
    SET sum = 0
    FOR i = 0 TO n-1:
        sum += nums[i]
        maxSum = MAX(maxSum, sum)
        IF sum < 0:
            sum = 0
    RETURN maxSum
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- If current sum becomes negative, reset it to 0.
- maxSum stores the maximum subarray sum seen so far.
- Works even with all negative numbers.

---

#### ⚠️ Notes
- Kadane’s Algorithm is the most efficient way to solve this problem.
- Also used to solve:
    - Maximum circular subarray sum
    - 2D Maximum submatrix sum
- Interviewer may ask for start and end indices of the subarray too – can be tracked with extra variables.