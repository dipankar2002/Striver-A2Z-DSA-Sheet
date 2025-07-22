# 🔢 Sum of First N Numbers Using Recursion

## 🧩 Problem Statement
Given a number `n`, find the **sum of the first N natural numbers** using recursion.

---

## 💡 Hint
- There are two ways to solve this recursively:
  - **Parameterised Recursion**: Pass the running total as a parameter.
  - **Functional Recursion**: Return the result of the recursive call and build the result through return values.

---

## 📌 Parameterised Recursive Approach (Tail Recursion)

### ✅ Pseudo Code
```plaintext
FUNCTION NnumbersSum_1(i, sum):
    IF i < 1:
        PRINT sum
        RETURN
    CALL NnumbersSum_1(i - 1, sum + i)
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** N recursive calls stored in call stack
#### 💡 Explanation
- Maintains the sum as part of the parameter (sum).
- Makes the function tail-recursive.
- Final result is printed once base case is reached.

---

## 📌 Functional Recursive Approach (Return-Based)

### ✅ Pseudo Code
```plaintext
FUNCTION NnumbersSum_2(n):
    IF n < 1:
        RETURN 0
    RETURN n + NnumbersSum_2(n - 1)
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** (due to call stack)
#### 💡 Explanation
- Builds the result using return values.
- Recursively reduces n and adds it to the result returned by the smaller problem.

---

#### ⚠️ Notes
- Parameterised recursion is useful when you want to accumulate a result during the call itself.
- Functional recursion is clean and often preferred in mathematical problems.
- Both approaches demonstrate key recursion techniques and are useful for problem-solving.