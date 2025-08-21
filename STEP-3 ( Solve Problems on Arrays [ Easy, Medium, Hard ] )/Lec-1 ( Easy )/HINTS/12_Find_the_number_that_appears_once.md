# 🔍 Find the Number that Appears Once (All Others Appear Twice)

## 🧩 Problem Statement
You are given a non-empty array of integers, where:
- Every element appears twice, except for one element, which appears only once.
- Your task is to find and return that single element.

```markdown
**Example:**
- Input: [4, 1, 2, 1, 2]
- Output: 4
```

---

## 💡 Hint
If every number appears twice, and only one appears once, then:
- You can count occurrences (Brute/Better),
- Or you can XOR all values (Optimal).

---

## 🥱 Brute Force Approach
### ✅ Pseudo Code
```js
FUNCTION singleNumber_1(nums):
  FOR i = 0 TO n - 1:
    SET count = 0
    FOR j = 0 TO n - 1:
      IF nums[i] == nums[j]:
        INCREMENT count
    IF count == 1:
      RETURN nums[i]
  RETURN -1
```
#### Complexity:
- Time - ** O(n²)**
- Space - **O(1)**
#### 💡 Explanation
- For each element, count how many times it appears in the array. If it's exactly 1, return it.

---

## 🥈 Better Approach – 1 [ Hash Array ]
### ✅ Pseudo Code
```js
FUNCTION singleNumber_2(nums):
  FIND max in nums → maxi
  CREATE array hash[maxi+1] = 0
  FOR each number:
    hash[number]++
  FOR each number:
    IF hash[number] == 1:
      RETURN number
  RETURN -1
```
#### Complexity:
- Time - **O(n + max element)**
- Space - **O(n)**
#### 💡 Explanation
- Use a hash array to count frequencies. Then find the number with count = 1.

---

## 🥈 Better Approach – 2 [ Hash Map (Object) ]
### ✅ Pseudo Code
```js
FUNCTION singleNumber_3(nums):
  CREATE map = {}
  FOR each num in nums:
    map[num] = map[num] + 1 or 1
  FOR each key in map:
    IF map[key] == 1:
      RETURN key
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)**
#### 💡 Explanation
- This is simpler and better than fixed-size arrays.
- Works for negative numbers or very large numbers too.

---

## 🏆 Optimal Approach – Using XOR
### ✅ Pseudo Code
```js
FUNCTION singleNumber_4(nums):
  SET xor = 0
  FOR each num in nums:
    xor = xor XOR num
  RETURN xor
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- XOR of two same numbers is 0: **a ^ a = 0**
- XOR of 0 and any number is that number: **0 ^ b = b**
- So: **a ^ a ^ b ^ b ^ c = c** (where c is the unique number)

---