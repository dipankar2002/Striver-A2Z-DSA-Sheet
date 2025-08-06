# 🎯 Two Sum – Find Pair with Given Sum

## 🧩 Problem Statement
Given an array **nums** and a target sum **target**, return the indices of the two numbers such that they add up to the target.
You may assume that each input has exactly one solution, and you may not use the same element twice.

```
**Example:**
- Input: nums = [2, 7, 11, 15], target = 9
- Output: [0, 1]  → Because 2 + 7 = 9
```

---

## 💡 Hint
- Use nested loops for brute force.
- Use HashMap to get O(n) time.
- For sorted arrays, use two-pointer technique.

---

## 🧱 Brute Force – Naive Approach
### ✅ Pseudo Code
```js
FUNCTION twoSum_1(nums, target):
    FOR i = 0 TO n-1:
        FOR j = i+1 TO n-1:
            IF nums[i] + nums[j] == target:
                RETURN [i, j]
    RETURN [-1, -1]
```
#### Complexity:
- Time - ** O(n²)**
- Space - **O(1)**
#### 💡 Explanation
- Tries all pairs **(i, j)** and returns if their sum is **target**.
- Very slow for large arrays.

---

## 🧠 Better Approach – Using HashMap
### ✅ Pseudo Code
```js
FUNCTION twoSum_2(nums, target):
    CREATE empty map
    FOR i = 0 TO n-1:
        SET complement = target - nums[i]
        IF complement is in map:
            RETURN [map[complement], i]
        map[nums[i]] = i
    RETURN [-1, -1]
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)**
#### 💡 Explanation
- For each element, check if the complement exists in the map.
- Stores number and its index.
- Most used approach in real-world coding interviews.
> ⚠️ Use **map.has(x)** instead of **hasOwnProperty(x)** for Map in JS!

---

## ⚡ Optimal Approach – Two Pointers (When Array is Sorted)
### ✅ Pseudo Code
```js
FUNCTION twoSum_3(nums, target):
    CREATE indexedNums = nums with original indices
    SORT indexedNums by value

    SET left = 0, right = n - 1
    WHILE left < right:
        SET sum = left.value + right.value
        IF sum == target:
            RETURN [left.index, right.index]
        ELSE IF sum < target:
            left++
        ELSE:
            right--
    RETURN [-1, -1]
```
#### Complexity:
- Time - **O(n log n)**
- Space - **O(n)** (to store original indices)
#### 💡 Explanation
- Works best when the array is sorted or can be sorted.
- Uses two-pointer technique to move left/right based on the sum.

---

#### ⚠️ Notes
- HashMap approach is best for unsorted arrays.
- Two-pointer approach needs sorting but gives a clean solution with original index tracking.
- If duplicates or multiple pairs are allowed, logic must be updated to handle them.