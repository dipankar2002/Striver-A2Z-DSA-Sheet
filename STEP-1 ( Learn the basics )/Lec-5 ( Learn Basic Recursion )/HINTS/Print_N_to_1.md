# 🔁 Print N to 1 Using Recursion

## 🧩 Problem Statement
Given a number `n`, print all numbers from **n to 1** using recursion.

---

## 💡 Hint
- Use a recursive function with base condition to stop recursion.
- Two ways to implement:
  - **Simple Recursive Approach**: Print before the recursive call (top-down).
  - **Backtracking Approach**: Make recursive call first, then print while backtracking (bottom-up).

---

## 🔁 Normal Recursive Approach

### ✅ Pseudo Code
```js
FUNCTION printNumbers_1(i, n):
    IF i > n:
        RETURN
    PRINT n
    CALL printNumbers_1(i, n - 1)
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** N recursive calls stored in call stack
#### 💡 Explanation
- Start from n, print it, then call for n-1.
- Continues until base case i > n.

---

## Recursion Tree
Let's trace `fn(1, 4)`:
```js
fn(1, 4)  // prints 4
  |
  +-- fn(1, 3)  // prints 3
      |
      +-- fn(1, 2)  // prints 2
          |
          +-- fn(1, 1)  // prints 1
              |
              +-- fn(1, 0)  // returns
```
---

## 🔁 Backtracking Recursive Approach

### ✅ Pseudo Code
```js
FUNCTION printNumbers_2(i, n):
    IF i > n:
        RETURN
    CALL printNumbers_2(i + 1, n)
    PRINT i
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** (due to call stack)
#### 💡 Explanation
- Begin from i = 1 to n, and print values during the backtrack phase.
- Achieves reverse order printing through recursion depth.

---

## Recursion Tree (Backtracking)
Let's trace `fn(1, 4)`:
```js
fn(1, 4)
  |
  +-- fn(2, 4)
      |
      +-- fn(3, 4)
          |
          +-- fn(4, 4)
              |
              +-- fn(5, 4)  // Base case: i > n, returns
            (prints 4)
          (prints 3)
      (prints 2)
  (prints 1)
```
---

#### ⚠️ Notes
- This problem demonstrates both direct recursion and backtracking techniques.
- Good for understanding how placement of the print statement affects the output order.