# 🤝 GCD of Two Numbers

## 🧩 Problem Statement
Given two positive integers `n1` and `n2`, find their **Greatest Common Divisor (GCD)**, also known as **HCF (Highest Common Factor)**.

---

## 💡 Hint
- A number that divides both `n1` and `n2` without leaving a remainder is a common factor.
- GCD is the **largest** such number.
- The Euclidean algorithm gives the most efficient way to compute GCD.

---

## 🐢 Brute Force Approach (Check All Up To min(n1, n2))

### ✅ Pseudo Code
```js
FUNCTION GCD_1(n1, n2):
    SET gcd = 1
    FOR i FROM 1 TO min(n1, n2):
        IF n1 MOD i == 0 AND n2 MOD i == 0:
            SET gcd = i
    RETURN gcd
```
#### Complexity:
- Time - **O(min(n1, n2))**
- Space - **O(1)**
#### 💡 Explanation
- Loop from 1 to the smaller of the two numbers.
- Keep updating gcd whenever a common divisor is found.

---

## 🧠 Better Approach (Start From min(n1, n2) and Return First Match)

### ✅ Pseudo Code
```js
FUNCTION GCD_2(n1, n2):
    FOR i FROM min(n1, n2) DOWN TO 1:
        IF n1 MOD i == 0 AND n2 MOD i == 0:
            RETURN i
    RETURN 1
```
#### Complexity:
- Time - **O(min(n1, n2))**
- Space - **O(1)**
#### 💡 Explanation
- Start checking from the largest possible common factor.
- Return as soon as the first one is found, which is the GCD.

---

## ⚡ Optimal Approach (Euclidean Algorithm)

### ✅ Pseudo Code
```js
FUNCTION GCD_3(n1, n2):
    WHILE n1 > 0 AND n2 > 0:
        IF n1 > n2:
            n1 = n1 MOD n2
        ELSE:
            n2 = n2 MOD n1
    IF n1 == 0:
        RETURN n2
    RETURN n1
```
#### Complexity:
- Time - **O(min(n1, n2))**
- Space - **O(1)**
#### 💡 Explanation
- Uses Euclidean algorithm which repeatedly replaces the larger number with the remainder of dividing the larger by the smaller.
- The loop continues until one number becomes 0.
- The other number at that point is the GCD.

---