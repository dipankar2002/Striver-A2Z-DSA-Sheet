# 🔁 Reverse an Array using Recursion

## 🧩 Problem Statement
Given an array of integers, reverse the array **in-place** using:
- A recursive approach with two pointers (start and end)
- An optimized recursive approach using a single pointer

---

## 💡 Hint

The idea is to **swap elements** from start to end moving inward until:
- `start >= end` for two-pointer method
- `start == n - start - 1` for the single-pointer method

---

## 📌 Two-pointer Recursive Approach

### ✅ Pseudo Code
```plaintext
FUNCTION reverse_1(arr, start, end):
    IF start >= end:
        RETURN
    SWAP arr[start] WITH arr[end]
    CALL reverse_1(arr, start + 1, end - 1)
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** (due to call stack)
#### 💡 Explanation
- This version uses two pointers: start and end.
- Swaps elements at the beginning and end of the array and moves the pointers inward.
- Base case: when start === end, it stops (middle reached).

---

## 📌 Optimized Single-pointer Recursive Approach

### ✅ Pseudo Code
```plaintext
FUNCTION reverse_2(arr, start):
    IF start >= arr.length - start - 1:
        RETURN
    SWAP arr[start] WITH arr[arr.length - start - 1]
    CALL reverse_2(arr, start + 1)
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)** (due to call stack)
#### 💡 Explanation
- This version only uses one parameter (start).
- Calculates the matching element from the end using: arr.length - start - 1.
- Stops recursion when start === arr.length - start - 1, meaning the middle is reached.
- More optimal in terms of parameter usage.

---