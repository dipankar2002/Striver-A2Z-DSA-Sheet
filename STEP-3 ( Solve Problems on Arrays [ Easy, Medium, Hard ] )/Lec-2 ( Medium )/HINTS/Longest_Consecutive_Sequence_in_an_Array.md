# 🔗 Longest Consecutive Sequence in an Array

## 🧩 Problem Statement
Given an unsorted array of integers, find the length of the longest consecutive elements sequence. <br>
The sequence elements do not need to be adjacent in the array, but they must appear consecutively in value.

```markdown
**Example 1:**
- Input: [100, 4, 200, 1, 3, 2]
- Output: 4

**Explanation:**
- The longest consecutive sequence is [1, 2, 3, 4].
```

---

## 💡 Hint
- Brute force: For each number, check if next numbers exist one by one.
- Better: Sort the array first and count consecutive runs.
- Optimal: Use a HashSet to find sequence starts in O(1) lookup.

---

## 🧱 Brute Force Approach
### ✅ Pseudo Code
```js
FUNCTION longestConsecutive_1(nums):
    max = 1
    FOR each num in nums:
        count = 1
        x = num
        WHILE search(nums, x + 1) == true:
            x = x + 1
            count++
        max = max(max, count)
    RETURN max

FUNCTION search(arr, k):
    FOR each element in arr:
        IF element == k:
            RETURN true
    RETURN false
```
#### Complexity:
- Time - **O(n²)** ( For each element, searching linearly )
- Space - **O(1)**

---

## ⚡ Better Approach – Sorting
### ✅ Pseudo Code
```js
FUNCTION longestConsecutive_2(nums):
    SORT(nums)
    max = 1
    count = 0
    last_small = -∞

    FOR each num in nums:
        IF num - 1 == last_small:
            count++
            last_small = num
        ELSE IF num != last_small:
            count = 1
            last_small = num
        max = max(max, count)

    RETURN max
```
#### Complexity:
- Time - **O(n log n)** 
- Space - **O(1)**
#### 💡 Explanation
- Duplicate numbers are skipped by **num != last_small** check.
- Sorting makes it easier to find consecutive runs.

---

## 🚀 Optimal Approach – Using HashSet
### ✅ Pseudo Code
```js
FUNCTION longestConsecutive_3(nums):
    max = 1
    set = new Set(nums)   // store all elements for O(1) lookup

    FOR each it in set:
        // start a sequence only if previous number is missing
        IF set does NOT contain (it - 1):
            cnt = 1
            x = it
            WHILE set contains (x + 1):
                x++
                cnt++
            max = max(max, cnt)

    RETURN max
```
#### Complexity:
- Time - **O(n)** average → Set lookup is O(1). 
- Space - **O(n)**
#### 💡 Explanation
- Duplicate numbers are skipped by **num != last_small** check.
- Sorting makes it easier to find consecutive runs.

---

### 📌 Cpmplexity Table
| Approach     | Time Complexity | Space Complexity | Idea                             |
|--------------|-----------------|------------------|----------------------------------|
| Brute Force  | O(n²)           | O(1)             | For each num, search next        |
| Better       | O(n log n)      | O(1)             | Sort and count                   |
| Optimal      | O(n)            | O(n)             | Use Set and check sequence starts |