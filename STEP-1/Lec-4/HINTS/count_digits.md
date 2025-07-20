# 📊 Count Digits in a Number

## 🧩 Problem Statement
Given a positive integer `n`, count the number of digits it contains.

---

## 💡 Hint
Each time you divide a number by 10, you remove its last digit.  
Also, the number of digits in a number `n` can be found using `⌊log₁₀(n) + 1⌋`.

---

## 🔁 Brute Force Approach (Using Loop)

### ✅ Pseudo Code
```plaintext
FUNCTION countDigit_1(n):
    SET c = 0
    WHILE n > 0:
        INCREMENT c by 1
        SET n = floor(n / 10)
    RETURN c
```
#### Complexity:
- Time - **O(log₁₀ n)**
- Space - **O(1)**
#### 💡 Explanation
- Keep dividing n by 10 until it becomes 0.
- Each division removes one digit.
- Count how many times we do this — that gives the total number of digits.

---

## 📐 Optimal Approach (Using Logarithm)

### ✅ Pseudo Code
```plaintext
FUNCTION countDigit_2(n):
    RETURN floor(log10(n) + 1)
```
#### Complexity:
- Time - **O(1)** Direct calculation using logarithm.
- Space - **O(1)**
#### 💡 Explanation
- Uses the formula: **Number of digits in n = ⌊log₁₀(n) + 1⌋**
- Avoids looping, much faster for large numbers.

---