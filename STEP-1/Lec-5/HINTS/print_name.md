# 🔁 Print Name N Times Using Recursion

## 🧩 Problem Statement
Given a name and a number `n`, print the name exactly `n` times using recursion.

---

## 💡 Hint
- Use a recursive function that prints the name and calls itself with incremented count until it reaches `n`.

---

## ⚡ Recursive Approach

### ✅ Pseudo Code
```plaintext
FUNCTION fn(name, count):
    Initialize N
    IF count > N:
        RETURN
    PRINT name
    CALL fn(name, count + 1)
```
#### Complexity:
- Time - **O(n)** One print + one recursive call per level
- Space - **O(n)** N recursive calls stored in call stack
#### 💡 Explanation
- The function fn is called with an initial count of 1.
- It prints the name and then recursively calls itself with the next count.
- When n exceeds the limit (5 in this example), the recursion stops.

---

## Recursion Tree
Let's trace `fn("Alice", 1)` with N=3:
```plaintext
fn("Alice", 1)  // prints "Alice"
  |
  +-- fn("Alice", 2)  // prints "Alice"
      |
      +-- fn("Alice", 3)  // prints "Alice"
          |
          +-- fn("Alice", 4)  // returns
```
---

#### ⚠️ Notes
- This is a classic base-case + recursive-call structure.
- Make sure to have a termination condition to avoid infinite recursion.