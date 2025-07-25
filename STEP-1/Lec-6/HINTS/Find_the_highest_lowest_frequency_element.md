# 📊 Find Highest and Lowest Frequency Element

## 🧩 Problem Statement
Given an array of integers **arr[]**, determine:
- The element that occurs the **most** times (maximum frequency).
- The element that occurs the **least** times (minimum frequency).

---

## 💡 Hint
- Use a visited array (brute force) or a hashmap to count the frequency.
- Track the max and min frequency while traversing the array or map.

---

## 🔁 Brute Force Approach (Using Visited Array)

### ✅ Pseudo Code
```js
FUNCTION findMaxMinFrequency_1(arr):
    SET n = length of arr
    visited[n] = array of false
    maxFreq = 0, minFreq = n
    maxEle = 0, minEle = 0

    FOR i FROM 0 TO n-1:
        IF visited[i] == true:
            CONTINUE
        count = 1
        FOR j FROM i+1 TO n-1:
            IF arr[i] == arr[j]:
                visited[j] = true
                count += 1
        IF count > maxFreq:
            maxFreq = count
            maxEle = arr[i]
        IF count < minFreq:
            minFreq = count
            minEle = arr[i]

    PRINT maxEle and minEle
```
#### Complexity:
- Time - **O(n²)**
- Space - **O(n)**
#### 💡 Explanation
- For each element, count its frequency.
- Skip already visited duplicates.
- Track the max and min frequency with corresponding elements.

---

## 📐 Optimal Approach (Using Hash Map)

### ✅ Pseudo Code
```js
FUNCTION findMaxMinFrequency_2(arr):
    CREATE empty map
    FOR each element in arr:
        map[element] = map[element] + 1 OR 1

    maxFreq = 0, minFreq = n
    maxEle = 0, minEle = 0

    FOR each (key, value) in map:
        IF value > maxFreq:
            maxFreq = value
            maxEle = key
        IF value < minFreq:
            minFreq = value
            minEle = key

    PRINT maxEle and minEle
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)**
#### 💡 Explanation
- Count all elements using a hashmap.
- Then, loop through the map to find:
    - Maximum frequency element
    - Minimum frequency element

---

#### ⚠️ Notes
- In case of a tie, this returns the first encountered element for both max and min.
- You can extend this to return all elements with max/min frequency using arrays.
- Works well for both numbers and strings.