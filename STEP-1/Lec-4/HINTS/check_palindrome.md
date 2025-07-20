# 🔁 Palindrome Number

## 🧩 Problem Statement
Given a positive integer `n`, check whether it is a palindrome.  
A number is a palindrome if it reads the same forward and backward.

---

## 💡 Hint
- Convert the number to a string and compare it with its reverse.  
- Alternatively, reverse the number using arithmetic and check if it's equal to the original.

---

## 🔁 Brute Force Approach (Using String)

### ✅ Pseudo Code
```plaintext
FUNCTION isPalindrome_1(n):
    SET str = convert n to string
    SET rev = reverse of str
    IF str is equal to rev:
        RETURN true
    ELSE:
        RETURN false
```
#### Complexity:
- Time - **O(n)** where n is the number of digits (due to string operations)
- Space - **O(n)** for storing reversed string
#### 💡 Explanation
- Converts number to a string.
- Reverses the string and checks if it matches the original.
- Simple and readable but uses extra space for strings.

---

## 📐 Optimal Approach (Using Arithmetic)

### ✅ Pseudo Code
```plaintext
FUNCTION isPalindrome_2(n):
    SET original = n
    SET rev = 0
    WHILE n > 0:
        SET rem = n % 10
        SET rev = (rev * 10) + rem
        SET n = floor(n / 10)
    IF rev is equal to original:
        RETURN true
    ELSE:
        RETURN false
```
#### Complexity:
- Time - **O(log₁₀ n)** (each step reduces n by a digit)
- Space - **O(1)**
#### 💡 Explanation
- Reverses the number mathematically without using extra memory.
- Compares the reversed number with the original to check for palindrome.

---