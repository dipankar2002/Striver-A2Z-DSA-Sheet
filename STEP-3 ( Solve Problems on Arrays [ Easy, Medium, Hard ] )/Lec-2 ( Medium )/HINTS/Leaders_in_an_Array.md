# 👑 Leaders in an Array

## 🧩 Problem Statement
Given an array nums, a leader is an element that is strictly greater than all the elements to its right. <br>
Return all leaders in the array.

```markdown
**Example 1:**
- Input:  [16, 17, 4, 3, 5, 2]
- Output: [17, 5, 2]

**Explanation:**
- 17 > 4, 3, 5, 2
- 5 > 2
- 2 is the last element → always a leader
```

---

## 💡 Hint
- A brute force approach compares each element with all elements to its right.
- Optimal: Traverse from right to left, keeping track of the current maximum.

---

## 🧱 Brute Force Approach
### ✅ Pseudo Code
```js
FUNCTION leaders_1(nums):
    n = length(nums)
    res = []

    FOR i FROM 0 TO n-1:
        flag = true
        FOR k FROM i+1 TO n-1:
            IF nums[i] < nums[k]:
                flag = false
                BREAK
        IF flag == true:
            res.push(nums[i])

    RETURN res
```
#### Complexity:
- Time - **O(n²)** 
- Space - **O(n)**
#### 💡 Explanation
- For each element, check all elements to the right.
- If none is greater, mark it as a leader.

---

## ⚡ Optimal Approach – Right to Left Scan
### ✅ Pseudo Code
```js
FUNCTION leaders_2(nums):
    n = length(nums)
    max = -∞
    res = []

    FOR i FROM n-1 DOWNTO 0:
        IF nums[i] > max:
            res.push(nums[i])
            max = nums[i]

    RETURN reverse(res)
```
#### Complexity:
- Time - **O(n)** 
- Space - **O(n)**
#### 💡 Explanation
- Start from the last element (always a leader).
- Keep track of the **max** seen so far.
- If the current element is greater than **max**, it’s a leader.

---

#### ⚠️ Notes
- This is a right-to-left scanning problem.
- The last element is always a leader.
- To do it in-place, print leaders while traversing from right to left.