# 🔢 Print All Divisors of a Number

## 🧩 Problem Statement
Given a positive integer `n`, print all the divisors of `n`.  
A divisor is a number that divides `n` exactly without leaving a remainder.

---

## 💡 Hint
- A number `i` is a divisor of `n` if `n % i == 0`.
- Divisors come in pairs: `(i, n/i)`. You only need to iterate up to `√n` to find all.

---

## 🔁 Brute Force Approach (Using Loop)

### ✅ Pseudo Code
```plaintext
FUNCTION divisors_1(n):
    SET divisors = empty list
    FOR i FROM 1 TO n:
        IF n MOD i == 0:
            ADD i to divisors
    RETURN divisors
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** where n is the number of divisors
#### 💡 Explanation
- Check every number from 1 to n.
- If it divides n exactly, store it.
- Simple but inefficient for large n.

---

## 📐 Optimal Approach (Using Logarithm)

### ✅ Pseudo Code
```plaintext
FUNCTION divisors_2(n):
    SET divisors = empty list
    FOR i FROM 1 TO √n:
        IF n MOD i == 0:
            ADD i to divisors
            IF i != n / i:
                ADD n / i to divisors
    RETURN divisors
```
#### Complexity:
- Time - **O(√n)** Direct calculation using logarithm.
- Space - **O(n)** where n is the number of divisors
#### 💡 Explanation
- If i divides n, then n/i is also a divisor.
- To avoid duplicates (especially for perfect squares), check i !== n/i.

---