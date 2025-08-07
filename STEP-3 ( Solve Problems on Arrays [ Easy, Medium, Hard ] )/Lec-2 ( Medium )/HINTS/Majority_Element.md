# 🗳️ Majority Element (More Than N/2 Times)

## 🧩 Problem Statement
Given an array nums[] of size n, find the element that appears more than ⌊n/2⌋ times.
Assume that a majority element always exists.

```
**Example:**
- Input:  nums = [3, 2, 3]
- Output: 3

- Input: nums = [2, 2, 1, 1, 1, 2, 2]
- Output: 2
```

---

## 💡 Hint
- Brute force: Count frequency of each element.
- Better: Use a HashMap.
- Optimal: Use **Moore’s Voting Algorithm**.

---

## 🧱 Brute Force – Check Frequency
### ✅ Pseudo Code
```js
FUNCTION majorityElement_1(nums):
    n = nums.length
    FOR i = 0 TO n-1:
        count = 0
        FOR j = i TO n-1:
            IF nums[i] == nums[j]:
                count++
        IF count > n/2:
            RETURN nums[i]
    RETURN -1
```
#### Complexity:
- Time - **O(n²)**
- Space - **O(1)**
#### 💡 Explanation
- For each element, count how many times it appears.
- Very slow for large arrays.

---

## 🧠 Better Approach – Using HashMap
### ✅ Pseudo Code
```js
FUNCTION majorityElement_2(nums):
    CREATE empty map
    FOR each element in nums:
        map[element] = map[element] + 1 OR 1
    FOR each key in map:
        IF map[key] > n/2:
            RETURN key
    RETURN -1
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)**
#### 💡 Explanation
- Stores frequencies in a hash map.
- Simple and efficient, but uses extra space.
> ⚠️ Use map.set() and map.get() properly in JavaScript Map objects. You're using it like a plain object in the code.

---

## ⚡ Optimal – Moore’s Voting Algorithm
### ✅ Pseudo Code
```js
FUNCTION majorityElement_3(nums):
    SET count = 0, candidate = 0
    FOR i = 0 TO n-1:
        IF count == 0:
            candidate = nums[i]
            count = 1
        ELSE IF nums[i] == candidate:
            count++
        ELSE:
            count--
    RETURN candidate
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Works in two phases:
    - Find candidate that could be majority.
    - (Optional) Verify if it occurs > n/2 times.
- Since the problem guarantees a majority element exists, we skip verification here.

---

#### ⚠️ Notes
- Moore’s Voting Algorithm is interview favorite.
- Can be extended to problems like:
    - Elements that appear more than ⌊n/3⌋ times.
    - Majority element in a stream of data.