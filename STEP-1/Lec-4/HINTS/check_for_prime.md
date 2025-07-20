# 🔍 Check if a Number is Prime

## 🧩 Problem Statement
Given a positive integer `n`, check whether it is a **prime number**.  
A prime number is a number greater than 1 that has no divisors other than 1 and itself.

---

## 💡 Hint
- A prime number has exactly **two** distinct divisors: 1 and itself.
- You can stop checking at `√n` because any factor larger than `√n` must be paired with a smaller one.

---

## 🔁 Brute Force Approach (Using Loop)

### ✅ Pseudo Code
```plaintext
FUNCTION isPrime_1(n):
    IF n <= 1:
        RETURN false
    FOR i FROM 2 TO n - 1:
        IF n MOD i == 0:
            RETURN false
    RETURN true
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Check every number from 2 to n - 1.
- If any number divides n, it is not prime.

---

## 📐 Optimal Approach (Using Logarithm)

### ✅ Pseudo Code
```plaintext
FUNCTION isPrime_2(n):
    IF n <= 1:
        RETURN false
    SET count = 0
    FOR i FROM 1 TO √n:
        IF n MOD i == 0:
            INCREMENT count
            IF n / i != i:
                INCREMENT count
    IF count == 2:
        RETURN true
    RETURN false
```
#### Complexity:
- Time - **O(√n)** Direct calculation using logarithm.
- Space - **O(1)** where n is the number of divisors
#### 💡 Explanation
- Count all divisors up to √n and their pair (n / i).
- A prime number should have only two divisors: 1 and itself.
- More than 2 means the number is not prime.

---

#### ⚠️ Notes
- Always handle edge cases like n = 0 or n = 1 (which are not prime).
- The Brute Force method can be very slow for large numbers.
- You can also skip even numbers in loop for better performance (small optimization).