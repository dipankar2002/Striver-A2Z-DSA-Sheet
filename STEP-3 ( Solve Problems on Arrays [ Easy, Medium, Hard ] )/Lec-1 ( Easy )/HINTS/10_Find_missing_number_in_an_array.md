# 🔢 Find the Missing Number

## 🧩 Problem Statement
Given an array containing **n** distinct numbers from the range **0** to **n**, find the one number that is missing from the array.

```markdown
**Example:**
- Input: nums = [3, 0, 1]
- Output: 2
```

---

## 💡 Hint
- The numbers are from 0 to n, but one is missing.
- Use sum formula or XOR logic to find the missing one.
- You can also use hashing if needed.

---

## 🐢 Brute Force Approach – Use Nested Loop
### ✅ Pseudo Code
```js
FUNCTION missingNumber_1(nums):
    FOR i FROM 0 TO nums.length:
        flag = false
        FOR j FROM 0 TO nums.length - 1:
            IF nums[j] == i:
                flag = true
                BREAK
        IF flag == false:
            RETURN i
    RETURN -1
```
#### Complexity:
- Time - **O(n²)**
- Space - **O(1)**
#### 💡 Explanation
- For every number from 0 to n, check if it exists in the array.
- If not, that's the missing number.
- Simple but slow for large arrays due to nested loops.

---

## 📦 Better Approach – Hashing with Array
### ✅ Pseudo Code
```js
FUNCTION missingNumber_2(nums):
    CREATE hash array of size n+1, initialized with 0
    FOR each num in nums:
        hash[num] = 1
    FOR i FROM 0 TO n:
        IF hash[i] == 0:
            RETURN i
    RETURN -1
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)**
#### 💡 Explanation
- Create a hash array to mark which numbers are present.
- The index with 0 is the missing number.
- Uses extra space but faster than brute force.

---

## ⚡ Optimal Approach 1 – Using Sum Formula
### ✅ Pseudo Code
```js
FUNCTION missingNumber_3(nums):
    n = nums.length
    totalSum = n * (n + 1) / 2
    actualSum = 0
    FOR each num in nums:
        actualSum += num
    RETURN totalSum - actualSum
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Use formula of sum of first n natural numbers.
- Subtract actual sum of array from expected total sum.
- Gives missing number directly without extra space.

---

## ⚙️ Optimal Approach 2 – Using XOR
### ✅ Pseudo Code
```js
FUNCTION missingNumber_4(nums):
    xor1 = 0
    FOR i FROM 0 TO n:
        xor1 ^= i
    FOR each num in nums:
        xor1 ^= num
    RETURN xor1
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- XOR of all numbers from 0 to n and all array elements.
- The result will be the missing number because duplicate XORs cancel each other.
- Very efficient for large inputs.

---