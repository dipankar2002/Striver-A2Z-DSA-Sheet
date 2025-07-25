# 🔢 Print 1 to N Using Recursion

## 🧩 Problem Statement
Given a number `n`, print all numbers from **1 to n** using recursion.

---

## 💡 Hint
- Use a simple recursive function with a base case to stop the recursion.
- There are **two approaches**:
  - **Normal Recursive Approach**: Start from 1 and go up to `n`.
  - **Backtracking Approach**: Start from `n` and go down to 1, but print during the backtracking step.

---

## 🔁 Normal Recursive Approach

### ✅ Pseudo Code
```js
FUNCTION printNumbers_1(i, n):
    IF i > n:
        RETURN
    PRINT i
    CALL printNumbers_1(i + 1, n)
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** N recursive calls stored in call stack
#### 💡 Explanation
- Starts from **1**, prints it, and then recursively calls the next number.
- Ends when **i > n**.

---

## Recursion Tree
Let's trace `fn(1, 4)`:
```js
fn(1, 4)  // prints 1
  |
  +-- fn(2, 4)  // prints 2
      |
      +-- fn(3, 4)  // prints 3
          |
          +-- fn(4, 4)  // prints 4
              |
              +-- fn(5, 4)  // returns
```
---

## 🔁 Backtracking Recursive Approach

### ✅ Pseudo Code
```js
FUNCTION printNumbers_2(i, n):
    IF i < 1:
        RETURN
    CALL printNumbers_2(i - 1, n)
    PRINT i
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** (due to call stack)
#### 💡 Explanation
- Starts from **n**, recursively goes down to **1**, and prints while returning (backtracking).
- Useful when logic needs to be executed in reverse during the return path.

---

## Recursion Tree (Backtracking)
Let's trace `fn(4, 4)`:
```js
fn(4, 4)
  |
  +-- fn(3, 4)
      |
      +-- fn(2, 4)
          |
          +-- fn(1, 4)
              |
              +-- fn(0, 4)  // Base case: i < 1, returns
            (prints 1)
          (prints 2)
      (prints 3)
  (prints 4)
```

---

#### ⚠️ Notes
- Both methods achieve the same goal but demonstrate different recursion techniques.
- Backtracking is often used when the output needs to be controlled in the return phase of recursion.