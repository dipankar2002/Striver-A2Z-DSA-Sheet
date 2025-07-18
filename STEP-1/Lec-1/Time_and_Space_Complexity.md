
# 📘 Time and Space Complexity – Striver’s A2Z DSA Course

## 🧠 What is Time Complexity?

Time complexity helps us analyze and compare the **performance of algorithms**. It tells us how the **execution time** of a program grows with the **input size**.

### ❗ Misconception:

Time complexity is **not** the actual time a machine takes to run a program.

- Example: The same code on a low-end PC and a high-end PC will take **different amounts of time**.
- That’s why we measure time complexity **independent of machines**.

### ✅ Definition:

> **Time Complexity** is the rate at which the execution time increases with respect to input size.

---

## 📈 Representation: Big O Notation

Big O notation shows how the number of steps grows.  
Example:
```js
for (let i = 1; i <= N; i++) {
    console.log("Hello");
}
```
- Steps = N × 1 = **O(N)**

If we manually count:
- Initialization → 1 step
- Comparison → N+1 times
- Increment → N times
- Statement execution → N times

➡ Still simplified to: **O(N)**

---

## 🧮 Rules to Calculate Time Complexity

### 1. Always Calculate Worst-Case
- **Best Case:** Fewest steps
- **Worst Case:** Maximum steps (always preferred for judging performance)
- **Average Case:** Between best and worst

### 2. Ignore Constant Terms
Example:
- `O(3N + 1)` ➡ becomes ➡ `O(N)`
- `O(4N³ + 3N² + 8)` ➡ becomes ➡ `O(N³)`

### 3. Ignore Lower Order Terms
- `O(N² + N + 1)` ➡ becomes ➡ `O(N²)`

### 👉 Final Result:
> Time Complexity = Most significant term with constant removed  
> Example: `O(4N³)` ➡ `O(N³)`

---

## ⛳ Other Notations (FYI)

| Notation | Meaning |
|----------|---------|
| O()      | Worst-case |
| θ()      | Average-case |
| Ω()      | Best-case |

*(Not important for interviews but good to know)*

---

## 📚 Examples

### 🔹 Example 1:

```cpp
for (int i = 0; i < N; i++) {
    for (int j = 0; j < N; j++) {
        // constant time
    }
}
```

- Outer loop → N times
- Inner loop → N times
- **Total = N × N = O(N²)**

---

### 🔹 Example 2:

```cpp
for (int i = 0; i < N; i++) {
    for (int j = 0; j <= i; j++) {
        // constant time
    }
}
```

- Inner loop runs: 1 + 2 + 3 + ... + N = **(N*(N+1))/2**
- So, **O(N²)** (ignoring constant factors)

---

## 💾 What is Space Complexity?

Space complexity is the **total memory** required by a program to run, including:

1. **Input space** → memory used by inputs
2. **Auxiliary space** → extra space used for processing

### ✅ Definition:

> **Space Complexity = Input Space + Auxiliary Space**

---

## 📌 Example:

```cpp
int a = 2, b = 3, c;
c = a + b;
```

- a, b → input space
- c → auxiliary space  
➡ Total space = **O(3)** ➡ Simplified to **O(1)**

---

## 🧑‍💻 Good Coding Practice

- Don't modify the input data just to save space
- Use extra space if needed for **clarity and safety**
- Only modify inputs **if explicitly allowed** by the interviewer

---

## ⏱ Online Judges & Time Limits

In platforms like Leetcode or Codeforces:

- Most servers perform ≈ **10⁸ operations per second**
- So for 1 second time limit → Your code should run in **O(10⁸)**
- For 2 seconds → **O(2 × 10⁸)**

### 🔁 Approximate Time Complexity Guide:

| N (Input Size) | Recommended TC |
|----------------|----------------|
| 10             | O(N!), O(2^N)   |
| 20–25          | O(2^N)          |
| 50–100         | O(N²), O(N³)    |
| 10⁴–10⁵        | O(N log N)      |
| 10⁶–10⁷        | O(N), O(log N)  |

---

## ✅ Summary

- **Time Complexity** = How fast code runs (in terms of input size)
- **Space Complexity** = How much memory it uses
- Use **Big O** for general analysis
- Always consider **worst-case**, ignore constants and lower order terms
- Practice by analyzing loops, conditions, recursion, and nested structures

---

🔗 *Inspired by Striver’s A2Z DSA Course*
