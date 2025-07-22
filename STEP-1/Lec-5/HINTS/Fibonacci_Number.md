# 🔢 Print Fibonacci Series up to Nth Term

## 🧩 Problem Statement
Write a program to compute the **Nth term** in the **Fibonacci Series** using:
- Iterative approach
- Recursive approach (multiple calls)

> The Fibonacci Series is a sequence where each number is the sum of the two preceding ones.
> Starting with: `0, 1, 1, 2, 3, 5, 8, ...`

---

## 🔍 Hint

- The nth Fibonacci number is: `F(n) = F(n-1) + F(n-2)`
- Use a loop for **iterative**, and recursive calls for the **recursive** solution.
- Base cases:  
  - F(0) = 0  
  - F(1) = 1

---

## 🔁 Iterative Approach

### ✅ Pseudo Code
```plaintext
FUNCTION fibonacci_1(n):
    a ← 0
    b ← 1
    WHILE b < n:
        fibo ← a + b
        a ← b
        b ← fibo
    RETURN a
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Start with two variables a=0, b=1
- Update them in each loop: a ← b, b ← a + b
- Stop when b reaches or exceeds n
- Return the last valid a

---

## 📌 Recursive Approach (Multiple Calls)

### ✅ Pseudo Code
```plaintext
FUNCTION fibonacci_2(n):
    IF n <= 1:
        RETURN n
    last ← fibonacci_2(n - 1)
    secondLast ← fibonacci_2(n - 2)
    RETURN last + secondLast
```
#### Complexity:
- Time - **O(2^n)**
- Space - **O(n)** (due to call stack)
#### 💡 Explanation
- Base case: if n <= 1, return n
- Recursive case: return fibonacci(n-1) + fibonacci(n-2)

---

#### ⚠️ Notes
- In the iterative approach, the function doesn't return the full series, just the last a before b crosses n.
- In the recursive approach, it returns the value at the exact n index.