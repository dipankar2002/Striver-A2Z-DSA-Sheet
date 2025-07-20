# 💪 Armstrong Number

## 🧩 Problem Statement
Given a positive integer `n`, check whether it is an **Armstrong Number**.

> A number is called an **Armstrong number** if the sum of its own digits each raised to the power of the number of digits equals the number itself.

---

## 💡 Hint
- For a `k`-digit number, split each digit, raise it to the power `k`, and sum it up.
- If the result equals the original number, it's an Armstrong number.

---

## ⚡ Optimal Approach (Using Math.pow)

### ✅ Pseudo Code
```plaintext
FUNCTION isArmstrong_1(n):
    SET k = number of digits in n
    SET sum = 0
    SET num = n

    WHILE n > 0:
        SET rem = n MOD 10
        SET sum = sum + (rem ^ k)
        SET n = floor(n / 10)

    IF sum == num:
        RETURN true
    ELSE:
        RETURN false
```
#### Complexity:
- Time - **O(n)** where n is the number of digits in n
- Space - **O(1)**
#### 💡 Explanation
- Count digits in the number (k).
- Loop through each digit and add its kth power to sum.
- At the end, if sum === original number, it's an Armstrong number.

---

#### ⚠️ Notes
- Armstrong numbers are rare and are typically used for number theory-based problems or puzzles.
- This code works for any number of digits, not just 3-digit numbers.