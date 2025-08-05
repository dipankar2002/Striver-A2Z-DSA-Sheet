# 📏 Longest Subarray with Given Sum K (Positives Only)

## 🧩 Problem Statement
Given an array **nums** of positive integers, and a target sum **K**, find the length of the longest subarray whose sum equals **K**.

```
**Example:**
- Input: nums = [1, 2, 3, 1, 1, 1, 1], K = 3
- Output: 3   → Subarray [1, 1, 1]
```

---

## 💡 Hint
- All elements are positive, so we can use sliding window or prefix sums.
- If negatives were allowed, we would need to change the approach.

---

## 🧱 Brute Force – 1 [ Nested Loops (O(n³)) ]
### ✅ Pseudo Code
```js
FUNCTION longestSubarray_1(nums, K):
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
- Tries all subarrays and checks if sum equals K.
- Inefficient for large arrays.

---

## 🧱 Brute Force – 2 [ Early Break (O(n²)) ]
### ✅ Pseudo Code
```js
FUNCTION longestSubarray_2(nums, K):
    SET maxLen = 0
    FOR i = 0 TO n-1:
        SET sum = 0
        FOR j = i TO n-1:
            sum += nums[j]
            IF sum > K: BREAK
            IF sum == K:
                maxLen = max(maxLen, j - i + 1)
    RETURN maxLen
```
#### Complexity:
- Time - **O(n²)**
- Space - **O(1)**
#### 💡 Explanation
- Improves brute force by breaking early when sum exceeds **K** (since all elements are positive).
- Still slow for large **n**.

---

## 🧠 Better Approach – Prefix Sum + HashMap
### ✅ Pseudo Code
```js
FUNCTION longestSubarray_3(nums, K):
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
- Uses a hashmap to store first index of each prefix sum.
- If **prefixSum - K** is found, it means there's a subarray that sums to **K**.

---

## ⚡ Optimal Approach – Sliding Window (Only for Positive Numbers)
### ✅ Pseudo Code
```js
FUNCTION longestSubarray_4(nums, K):
    SET left = 0, right = 0
    SET sum = nums[0], maxLen = 0
    WHILE right < n:
        WHILE sum > K AND left <= right:
            sum -= nums[left]
            left++
        IF sum == K:
            maxLen = max(maxLen, right - left + 1)
        right++
        IF right < n:
            sum += nums[right]
    RETURN maxLen
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Works only for positive numbers.
- Expands window with **right**, shrinks with **left** when **sum** exceeds **K**.

---

#### ⚠️ Notes
- Use sliding window only when all elements are positive.
- Use prefix sum + hashmap when array contains 0 or negative values.
- All approaches return only the length, not the subarray. To get the subarray, store indices.