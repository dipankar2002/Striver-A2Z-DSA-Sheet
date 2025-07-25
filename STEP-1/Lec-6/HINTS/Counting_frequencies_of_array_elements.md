# 🔢 Count Frequency of Each Element in an Array

## 🧩 Problem Statement
Given an array of integers arr[], count the frequency of each element and print them.

---

## 💡 Hint
- Use a nested loop or a hashmap (object/map) to track how many times each element occurs.
- Visited array is useful in the brute force approach to avoid duplicate counting.
- In the optimal approach, a Map or Object allows direct frequency updates in O(1) time per element.

---

## 🔁 Brute Force Approach (Using Visited Array)

### ✅ Pseudo Code
```js
FUNCTION countFrequencies_1(arr):
    SET n = length of arr
    CREATE visited[n] and initialize with false

    FOR i FROM 0 TO n-1:
        IF visited[i] == true:
            CONTINUE
        SET count = 1
        FOR j FROM i+1 TO n-1:
            IF arr[i] == arr[j]:
                visited[j] = true
                count += 1
        PRINT arr[i], count
```
#### Complexity:
- Time - **O(n²)**
- Space - **O(n)**
#### 💡 Explanation
- Traverse each element.
- For every new (unvisited) element, count all its occurrences in the rest of the array.
- Mark all duplicates as visited to skip them later.

---

## 📐 Optimal Approach (Using Logarithm)

### ✅ Pseudo Code
```js
FUNCTION countFrequencies_2(arr):
    CREATE empty map
    FOR i FROM 0 TO n-1:
        map[arr[i]] = map[arr[i]] + 1 OR 1
    FOR each key in map:
        PRINT key, map[key]
```
#### Complexity:
- Time - **O(n)** Direct calculation using logarithm.
- Space - **O(n)** where n is the number of divisors
#### 💡 Explanation
- Store frequency count using a key-value pair in the map.
- Much faster and cleaner, especially for large arrays.

---

#### ⚠️ Notes
- This works well for integers or strings as keys.
- If keys can be complex objects, prefer Map() over {} in JavaScript.
- The brute force is only acceptable for small inputs or educational purposes.
- You can sort the array if you want the output in a particular order.