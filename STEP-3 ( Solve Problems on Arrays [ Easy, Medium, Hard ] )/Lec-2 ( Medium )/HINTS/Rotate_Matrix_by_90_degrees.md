# 🔄 Rotate Matrix by 90 degrees

## 🧩 Problem Statement
Given an **n x n** 2D matrix representing an image, rotate the image by **90 degrees** (clockwise).
Do it **in-place** (without using extra space if possible).

```markdown
**Example 1:**
- Input: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
- Output: [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]
```

---

## 💡 Hint
- **Brute force**: Create a new matrix and copy elements to their new, rotated positions.
- **Optimal**: Perform two in-place transformations: a **transpose** and a **row reversal**.

---

## 🧱 Brute Force Approach
### ✅ Pseudo Code
```js
FUNCTION rotateMatrix_1(matrix):
    n = number of rows
    m = number of columns
    res = new n x m matrix filled with 0

    // Step 1: Copy elements to the new matrix in their rotated positions
    FOR i = 0 to n-1:
        FOR k = 0 to m-1:
            res[k][n-1-i] = matrix[i][k]

    // Step 2: Copy back to the original matrix
    FOR i = 0 to n-1:
        FOR k = 0 to m-1:
            matrix[i][k] = res[i][k]

    RETURN matrix
```
#### Complexity:
- Time - **O(n²)** (Two passes over the matrix)
- Space - **O(n²)** (Uses an auxiliary matrix).
#### 💡 Explanation
- This approach is straightforward. You allocate a new matrix of the same size and populate it with the rotated values from the original matrix.
- The new position for **matrix[i][k]** is **res[k][n-1-i]**.
---

## ⚡ Optimal Approach – In-Place (O(1) Space)
### ✅ Pseudo Code
```js
FUNCTION rotateMatrix_2(matrix):
    n = number of rows
    m = number of columns

    // Step 1: Transpose the matrix
    FOR i = 0 to n-1:
        FOR k = i to m-1:
            SWAP(matrix[i][k], matrix[k][i])

    // Step 2: Reverse each row
    FOR i = 0 to n-1:
        left = 0
        right = m-1
        WHILE left < right:
            SWAP(matrix[i][left], matrix[i][right])
            left++
            right--
    RETURN matrix
```
#### Complexity:
- Time - **O(n²)**
- Space - **O(1)**
#### 💡 Explanation
- A 90-degree clockwise rotation can be achieved by first transposing the matrix (swapping **matrix[i][k]** with **matrix[k][i]**) and then reversing each of its rows.
- This is an elegant way to perform the rotation without using any extra space.

---