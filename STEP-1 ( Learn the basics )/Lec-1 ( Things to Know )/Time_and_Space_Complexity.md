# 🕒 Time and Space Complexity - Striver's A2Z DSA Course

---

✅ **Mark as Completed**

---

## 📚 Introduction

In this article, we are going to discuss the terms **time complexity** and **space complexity**. Here, we will learn the basics of them and in the upcoming part, we will learn complex algorithms with a detailed discussion of their time complexity and space complexity. 

---

## ⏰ What is Time Complexity?

We can solve a problem using different logic and different codes. **Time complexity** basically helps to judge different codes and also helps to decide which code is better. In an interview, an interviewer generally judges a code by its time complexity.

> ⚠️ **Note:** Time complexity does **not** refer to the time taken by the machine to execute a particular code.

### 🖥️ Why not judge by machine time?
If we run the same code in a **low-end machine**(e.g. old windows machine) and in a **high-end machine**(e.g. Latest MacBook), we will observe that two different machines **take different amounts of time** for the same code. The high-end machine will take lesser time as compared to the low-end machine.
- Different machines (e.g., old Windows vs. latest MacBook) take different times for the same code.
- Time taken depends on machine configuration.
> **That is why we should not compare the two different codes on the basis of the time taken by a machine as the time is dependent on it.**
- **Conclusion:** Do **not** compare codes based on machine time.

### 📖 **Definition:**
> The rate at which **the time**, required to run a code, changes with **respect to the input size**, is considered the time complexity.<br> 
**Basically, the time complexity of a particular code depends on the given input size, not on the machine used to run the code.**

---

Let’s understand this using the following diagram:
![Alt text](https://static.takeuforward.org/wp/uploads/2023/01/Screenshot-2023-01-22-183223.png)

### 📝 How do we represent time complexity?
-To represent the time complexity, we generally use the **Big O notation**. The Big O notation looks like the following: `O(...)`<br>
-![Alt text](https://static.takeuforward.org/wp/uploads/2023/01/Screenshot-2023-01-22-183353.png)


### Let’s understand this using the following example:
![Alt text](https://static.takeuforward.org/wp/uploads/2023/01/Screenshot-2023-01-22-183453.png)
- The time complexity for this code will be nothing but the number of steps, this code will take to be executed. So, if we write this in terms of Big O notation, it will be like:<br>
**In Big O: `O(no. of steps)`**

#### Steps in a simple loop:
1. Assigning step (`i = 1`)
2. Comparison (`i <= 5`)
3. Print statement (`cout << "Raj";`)
4. Increment (`i++`)
5. Repeat comparison and print for each iteration

- For 5 iterations: 5 × 3 = 15 steps → `O(15)`
- For N iterations: N × 3 = 3N steps → `O(3N)`

> 🚫 **Manual counting is not feasible for large codes.**

---

## 📏 Rules for Calculating Time Complexity

1. **Always calculate for the worst-case scenario.**
2. **Avoid including constant terms.**
3. **Avoid lower order terms.**

### 1️⃣ Worst-case scenario
- **Best Case:** Least time (e.g., only 2 steps)
- **Worst Case:** Maximum time (e.g., 4 steps)
- **Average Case:** Between best and worst
- **Why worst-case?** To judge robustness and ensure the system serves the maximum clients.

### 2️⃣ Avoid constant terms
- Example: `O(4N^3 + 3N^2 + 8)`
  - For large N, 8 is insignificant.
  - Write as `O(4N^3 + 3N^2)`
- In code: `O(3N + 1)` → `O(3N)`

### 3️⃣ Avoid lower order terms
- Example: `O(4N^3 + 3N^2)`
  - For large N, `3N^2` is less significant than `4N^3`.
  - Write as `O(4N^3)`
  - Can further simplify to `O(N^3)`

---

## 🔤 Other Notations
- **Theta (θ)** and **Omega (Ω)** notations exist.
- Not crucial for interviews; refer to textbooks for details.

---

## ❓ Practice Questions

### Q1: Given the following code:

- Outer loop: `i` runs from 0 to N-1 (N times)
- Inner loop: `j` runs from 0 to N-1 (N times)
- **Total steps:** N × N = N²
- **Time complexity:** `O(N²)`

### Q2: Given the following code:

- Outer loop: `i` runs from 0 to N-1 (N times)
- Inner loop: `j` runs from 0 to i (`i+1` times)
- **Total steps:** 1 + 2 + 3 + ... + N = (N(N+1))/2 = N²/2 + N/2
- **Time complexity:** `O(N²/2 + N/2)` → `O(N²/2)` → `O(N²)`

---

## 💾 What is Space Complexity?

- **Space complexity** refers to the memory space a code uses while being executed.
- Like time complexity, we use **Big O notation** for space complexity.

### 📖 **Definition:**
> Space complexity = Auxiliary space + Input space
> - **Auxiliary space:** Extra space used to solve the problem
> - **Input space:** Space to store the inputs

#### Example:
- Variables `a` and `b` store inputs; `c` is auxiliary space.
- **Space complexity:** `O(3)`
- For array of size N: `O(N)`

### 🧑‍💻 Good Coding Practice
- **Do not manipulate given inputs to reduce space complexity** (unless instructed by interviewer).
- Companies may reuse data for different purposes.

---

## 🏆 Points to Remember (Competitive Programming)

- Online judges (Leetcode, GeeksforGeeks, etc.) execute ~10⁸ operations in ~1 second.
- If time limit is 2s: code should do ~2×10⁸ operations, not 10¹⁶.
- For 1s: time complexity should be around `O(10⁸)` (ignoring constants and lower order terms).

## 📺 Watch Video Explanation

Here’s a detailed explanation on YouTube:  
👉 [https://youtu.be/FPu9Uld7W-E](https://youtu.be/FPu9Uld7W-E)

---
