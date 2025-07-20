# 🔄 Reverse a Number

## 🧩 Problem Statement
Given a positive integer `n`, return the number obtained by reversing its digits.

---

## 💡 Hint
- Convert the number to a string to easily reverse its characters.  
- Or, extract digits one by one using modulo `% 10` and construct the reverse using arithmetic.

---

## 🔁 Brute Force Approach (Using String Manipulation)

### ✅ Pseudo Code
```plaintext
FUNCTION reverseNumber_1(n):
    SET rev = convert n to string
    SET rev = reverse the string
    RETURN rev
```
#### Complexity:
- Time - **O(n)** where d is the number of digits (due to string operations)
- Space - **O(n)** for storing reversed string
#### 💡 Explanation
- Convert the number to a string.
- Use string functions to reverse it.
- This is simple and readable but uses extra space.

---

## 📐 Optimal Approach (Using Modulo and Arithmetic)

### ✅ Pseudo Code
```plaintext
FUNCTION reverseNumber_2(n):
    SET rev = 0
    WHILE n > 0:
        SET rem = n % 10
        SET rev = (rev * 10) + rem
        SET n = floor(n / 10)
    RETURN rev
```
#### Complexity:
- Time - **O(log₁₀ n)** (each step reduces n by a digit)
- Space - **O(1)**
#### 💡 Explanation
- Extract the last digit using % 10.
- Build the reversed number by shifting digits left (multiplying rev by 10).
- This is memory-efficient and fast.

---

#### ⚠️ Notes
- If you want to preserve the result as a number, use the optimal approach.
- For handling negative numbers or trailing zeros, extra handling is required.