# 📏 Longest Subarray with Given Sum K (Positives & Negatives)

## 🧩 Problem Statement
Given an array **nums** (which may include positive, negative, and zero values), and a number **K**, return the length of the longest subarray whose elements sum up to exactly **K**.

```markdown
**Example:**
- Input: nums = [1, -1, 5, -2, 3], K = 3
- Output: 4  → Subarray [1, -1, 5, -2]
```

---

## 💡 Hint
- Use prefix sum + HashMap to store the first occurrence of every sum.
- Sliding window doesn’t work with negative numbers because shrinking the window can increase the sum.

---

## 🧱 Brute Force – 1 [ Triple Loop (O(n³)) ]
### ✅ Pseudo Code
```js
FUNCTION getLongestSubarray_1(nums, K):
    SET maxLen = 0
    FOR i = 0 TO n-1:
        FOR j = i TO n-1:
            SET sum = 0
            FOR k = i TO j:
                sum += nums[k]
            IF sum == K:
                maxLen = max(maxLen, j - i + 1)
    RETURN maxLen
```
#### Complexity:
- Time - ** O(n³)**
- Space - **O(1)**
#### 💡 Explanation
- Checks all possible subarrays using 3 nested loops.
- Not efficient, use only for understanding.

---

## 🧱 Brute Force – 2 [ Double Loop (O(n²)) ]
### ✅ Pseudo Code
```js
FUNCTION getLongestSubarray_2(nums, K):
    SET maxLen = 0
    FOR i = 0 TO n-1:
        SET sum = 0
        FOR j = i TO n-1:
            sum += nums[j]
            IF sum == K:
                maxLen = max(maxLen, j - i + 1)
    RETURN maxLen
```
#### Complexity:
- Time - **O(n²)**
- Space - **O(1)**
#### 💡 Explanation
- Slight improvement over triple loop.
- Accumulates the sum instead of recomputing it from scratch.

---

## ⚡ Optimal – Prefix Sum + HashMap
### ✅ Pseudo Code
```js
FUNCTION getLongestSubarray_3(nums, K):
    CREATE map: prefixSum → index
    SET sum = 0, maxLen = 0
    FOR i = 0 TO n-1:
        sum += nums[i]
        IF sum == K:
            maxLen = i + 1
        IF (sum - K) exists in map:
            len = i - map[sum - K]
            maxLen = max(maxLen, len)
        IF sum not in map:
            map[sum] = i
    RETURN maxLen
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)**
#### 💡 Explanation
- Prefix sum keeps track of total so far.
- If **sum - K** was seen earlier at index **j**, then **sum[j+1...i] = K**.
- Only stores first occurrence of a prefix sum to get the longest subarray.

---

#### ⚠️ Notes
- This is a must-know pattern for subarrays with target sum when negatives are included.
- Sliding Window does not work with negatives.
- Works for all integers: positive, negative, and zero.