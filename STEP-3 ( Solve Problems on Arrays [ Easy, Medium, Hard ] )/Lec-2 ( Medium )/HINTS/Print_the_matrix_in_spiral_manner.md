# 🌀 Spiral Matrix Traversal

## 🧩 Problem Statement
Given an **n x m** matrix, return all elements of the matrix in **spiral order**. <br>
![example image](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)

```markdown
**Example 1:**
- Input: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
- Output: [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]
```

---

## 💡 Hint
- The key is to traverse the matrix layer by layer, from the **outside in**.
- Use four pointers to define the boundaries: **top**, **bottom**, **left**, and **right**.
- After each traversal of a side (e.g., top row), update the corresponding boundary pointer.

---

## ⚡ Optimal Approach – Boundary Traversal
### ✅ Pseudo Code
```js
FUNCTION spiralOrder(matrix):
    n = number of rows
    m = number of columns
    res = new empty array
    // Initialize boundary pointers
    top = 0, left = 0, right = m-1, bottom = n-1

    WHILE top <= bottom AND left <= right:
        // Traverse Left to Right (top row)
        FOR i = left to right:
            res.push(matrix[top][i])
        top++
        
        // Traverse Top to Bottom (right column)
        FOR i = top to bottom:
            res.push(matrix[i][right])
        right--
        
        // Traverse Right to Left (bottom row)
        IF top <= bottom:
            FOR i = right down to left:
                res.push(matrix[bottom][i])
            bottom--
        
        // Traverse Bottom to Top (left column)
        IF left <= right:
            FOR i = bottom down to top:
                res.push(matrix[i][left])
            left++
        
    RETURN res
```
#### Complexity:
- Time - **O(n × m)** 
- Space - **O(1)**  (if not considering the output array)
#### 💡 Explanation
- The algorithm uses four pointers to define the boundaries of the current layer: **top**, **bottom**, **left**, and **right**.
- It repeatedly traverses the four sides of the current layer (**left-to-right**, **top-to-bottom**, **right-to-left**, and **bottom-to-top**).
- After each traversal, the corresponding boundary pointer is adjusted inwards. The loop continues as long as **top** is less than or equal to **bottom** and **left** is less than or equal to **right**, effectively "**peeling**" the matrix like an onion.
- The **if** checks for the **right-to-left** and **bottom-to-top** traversals are crucial for handling cases where the matrix has a **single row** or a **single column**, preventing duplicates.
---

#### ⚠️ Notes
- This is the **optimal** approach as it visits each element exactly once with a single pass through the matrix and uses constant extra space for the boundary pointers.
- The brute force approach (not shown here) would involve using a visited array of the same size, which would increase the space complexity to O(n × m).