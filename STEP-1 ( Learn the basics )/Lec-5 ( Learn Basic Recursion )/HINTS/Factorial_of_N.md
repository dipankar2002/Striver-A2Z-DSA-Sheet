# ✳️ Factorial of a Number (Iterative and Recursive)

## 🧩 Problem Statement
Given a number `n`, find the **factorial** of the number using:
- Iterative approach
- Recursive approach

> **Factorial Formula:**  
> `n! = n × (n - 1) × (n - 2) × ... × 1`  
> `0! = 1` (by definition)

---

## 📌 Iterative Approach

### ✅ Pseudo Code
```js
FUNCTION factorial_1(n):
    SET factorial = 1
    FOR i FROM 1 TO n:
        factorial = factorial * i
    RETURN factorial
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Uses a loop to multiply all numbers from 1 to n.
- Simple and memory-efficient.

---

## 📌 Recursive Approach

### ✅ Pseudo Code
```js
FUNCTION factorial_2(n):
    IF n == 0:
        RETURN 1
    IF n == 1:
        RETURN 1
    RETURN n * factorial_2(n - 1)
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** (due to call stack)
#### 💡 Explanation
- Defines factorial in terms of smaller sub-problems.
- Recursive calls multiply n by factorial of n-1.

---

## Recursion Tree
Let's trace `fn(4)`:
```js
fn(4)
  |
  +-- 4 * fn(3)
      |
      +-- 3 * fn(2)
          |
          +-- 2 * fn(1)
              |
              +-- 1  // Base case
```
The calls return and multiply: `1 * 2 * 3 * 4 = 24`.
---

#### ⚠️ Notes
- Factorial is a classic example to understand recursion.
- Iterative version is more memory-efficient.
- Recursive version is more elegant but can lead to stack overflow for large n.