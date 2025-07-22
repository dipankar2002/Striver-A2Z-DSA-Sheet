# 🔁 Check if a String is Palindrome

## 🧩 Problem Statement
Given a string `s`, check whether the string is a **palindrome** using recursion.

> A **palindrome** is a word or sentence that reads the same backward as forward.  
> Example: `madam`, `racecar`, `ABCDCBA`

---

## 🔍 Hint

- A palindrome has matching characters from start to end.
- You can check from both ends and move toward the center.
- Use recursion by comparing:  
  `s[start]` with `s[s.length - start - 1]`.

---

## 📌 Optimal Recursive Approach

### ✅ Pseudo Code
```plaintext
FUNCTION palindromeCheck_1(s, start):
    IF start >= s.length / 2:
        RETURN true
    IF s[start] != s[s.length - start - 1]:
        RETURN false
    RETURN palindromeCheck_1(s, start + 1)
```
#### Complexity:
- Time - **O(n/2)** recursion till half of the string
- Space - **O(n/2)** (due to call stack)
#### 💡 Explanation
- Recursively compare the characters from start and end.
- If all matching pairs are equal till the middle, it's a palindrome.
- Base case: when start crosses or reaches middle → return true.

---