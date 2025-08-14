# 🧮 Set Matrix Zeroes

## 🧩 Problem Statement
Given an `n x m` matrix, if any element is **0**, set its entire row and column to **0**.  
Do it **in-place** (without using extra space if possible).

```markdown
**Example 1:**
- Input: [ [1, 1, 1], [1, 0, 1], [1, 1, 1] ]
- Output: [ [1, 0, 1], [0, 0, 0], [1, 0, 1] ]
```

---

## 💡 Hint
- **Brute force:** Replace non-zero elements in affected rows/columns with a placeholder (e.g., `-1`), then set them to `0`.
- **Better:** Use extra arrays to mark rows and columns that need to be zeroed.
- **Optimal:** Use the first row and first column of the matrix itself to store zero-mark information.

---

## 🧱 Brute Force Approach (Binary Matrix Only)
### ✅ Pseudo Code
```js
FUNCTION setZeroes_1(matrix):
    n = number of rows
    m = number of columns

    FOR i = 0 to n-1:
        FOR k = 0 to m-1:
            IF matrix[i][k] == 0:
                markRow(matrix, n, m, i)
                markCol(matrix, n, m, k)

    // Replace all -1 with 0
    FOR i = 0 to n-1:
        FOR k = 0 to m-1:
            IF matrix[i][k] == -1:
                matrix[i][k] = 0
    RETURN matrix
```
### Helper Functions:
```js
FUNCTION markRow(matrix, n, m, i):
    FOR k = 0 to m-1:
        IF matrix[i][k] != 0:
            matrix[i][k] = -1

FUNCTION markCol(matrix, n, m, k):
    FOR i = 0 to n-1:
        IF matrix[i][k] != 0:
            matrix[i][k] = -1
```
#### Complexity:
- Time - **O(n × m × (n+m))** ≈ **O(n² × m)**
- Space - **O(1)** (but only works for binary matrices).

---

## 🔹 Better Approach – Extra Arrays
### ✅ Pseudo Code
```js
FUNCTION setZeroes_2(matrix):
    n = number of rows
    m = number of columns
    row = array[n] filled with 0
    col = array[m] filled with 0

    // Step 1: Mark rows and columns
    FOR i = 0 to n-1:
        FOR k = 0 to m-1:
            IF matrix[i][k] == 0:
                row[i] = 1
                col[k] = 1

    // Step 2: Update matrix
    FOR i = 0 to n-1:
        FOR k = 0 to m-1:
            IF row[i] == 1 OR col[k] == 1:
                matrix[i][k] = 0

    RETURN matrix
```
#### Complexity:
- Time - **O(n × m)** 
- Space - **O(n + m)**
#### 💡 Explanation
- Use two arrays to remember which rows and columns need to be zeroed.
- After marking, make a second pass to set values to **0**.

---

## ⚡ Optimal Approach – In-Place (O(1) Space)
### ✅ Pseudo Code
```js
FUNCTION setZeroes_3(matrix):
    n = rows
    m = columns
    col0 = 1

    // Step 1: Use 1st row and col as markers
    FOR i = 0 to n-1:
        FOR k = 0 to m-1:
            IF matrix[i][k] == 0:
                matrix[i][0] = 0
                IF k != 0:
                    matrix[0][k] = 0
                ELSE:
                    col0 = 0

    // Step 2: Apply markers to rest of matrix
    FOR i = 1 to n-1:
        FOR k = 1 to m-1:
            IF matrix[i][0] == 0 OR matrix[0][k] == 0:
                matrix[i][k] = 0

    // Step 3: Handle 1st row
    IF matrix[0][0] == 0:
        FOR k = 0 to m-1:
            matrix[0][k] = 0

    // Step 4: Handle 1st column
    IF col0 == 0:
        FOR i = 0 to n-1:
            matrix[i][0] = 0

    RETURN matrix
```
#### Complexity:
- Time - **O(n × m)** average → Set lookup is O(1). 
- Space - **O(1)**
#### 💡 Explanation
- Store zero information in the first row and first column.
- Use a **col0** variable to handle the first column separately.

## 🎨 Diagram – Optimal Approach (Step-by-Step)
### Step 1: Initial Matrix
[1, 1, 1], <br>
[1, 0, 1], <br>
[1, 1, 1]
-
📝 **Observation:**  
Zero found at `(1,1)` → mark **row 1** and **column 1** using **first row & first column**.

### Step 2: Mark in First Row & Column
[1, 0, 1], ← Mark col 1 in first row <br>
[0, 0, 1], ← Mark row 1 in first column <br>
[1, 1, 1] 
-
💡 **col0 = 1** (first column has no zero at index 0 so far)

### Step 3: Apply Markers to Inner Matrix
🔍 **Rule:** If `matrix[i][0] == 0` OR `matrix[0][k] == 0` → set `matrix[i][k] = 0`

[1, 0, 1], <br>
[0, 0, 0], <br>
[1, 0, 1]
-
📌 Row 1 zeroed due to `matrix[1][0] = 0`  
📌 Column 1 zeroed due to `matrix[0][1] = 0`

### Step 4: Handle First Row & First Column
- `matrix[0][0] != 0` → **First row remains unchanged**  
- `col0 = 1` → **First column remains unchanged**

✅ **Final Output:** <br>
[1, 0, 1], <br>
[0, 0, 0], <br>
[1, 0, 1]
-

Step 2 Marking: <br>
↓ (col 1 mark) <br>
[1, 0, 1], <br>
[0, 0, 1], → (row 1 mark) <br>
[1, 1, 1] <br>
Step 3 Filling:<br>
If ↑ row mark OR ← col mark → set to 0
---

#### ⚠️ Notes
- Brute force works only for binary matrices since it uses **-1** as a marker.
- The better approach works for all matrices but uses extra space.
- The optimal approach is the best choice for in-place modification with constant space.