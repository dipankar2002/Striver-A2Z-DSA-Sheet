# 🔄 Rotate Array by K Elements (Left & Right)

## 🧩 Problem Statement
Given an array nums and a number k, rotate the array:
- Left Rotation: Shift each element to the left by k positions.
- Right Rotation: Shift each element to the right by k positions.

The rotation must be in-place, meaning without using extra space if possible.

---

## 💡 Hint
- Brute-force uses a temporary array to help rotate elements.
- Optimal solution uses array reversal technique to rotate in-place.

---

## 🐢 Brute Force Approach

### ✅ Pseudo Code [ 🔁 Left Rotation by K ]
```js
FUNCTION rotateArrayLeft_1(nums, k):
    SET k = k % nums.length
    STORE first k elements in temp array
    SHIFT remaining elements left by k positions
    COPY temp to end of array
    RETURN nums
```
#### Complexity:
- Time - **O(n)**
- Space - **O(k)** (temporary array)
#### 💡 Explanation
- Stores first k elements.
- Shifts the remaining elements left.
- Places the stored elements at the end.

### ✅ Pseudo Code [ 🔁 Right Rotation by K ]
```js
FUNCTION rotateArrayRight_1(nums, k):
    SET k = k % nums.length
    STORE last k elements in temp array
    SHIFT remaining elements right by k positions
    COPY temp to start of array
    RETURN nums
```
#### Complexity:
- Time - **O(n)**
- Space - **O(k)** (temporary array)
#### 💡 Explanation
- Stores last k elements.
- Shifts the rest of the array rightward.
- Places the stored values at the beginning.

---

## ⚡ Optimal Approach (Using Reversal Algorithm)
***The reversal technique is based on this idea:***
#### To Left Rotate by K:
- Reverse first k elements
- Reverse remaining n-k elements
- Reverse the whole array
#### To Right Rotate by K:
- Reverse first n-k elements
- Reverse last k elements
- Reverse the whole array

### ✅ Pseudo Code [ 🔁 Left Rotation by K (Optimal) ]
```js
FUNCTION rotateArrayLeft_2(nums, k):
    k = k % nums.length
    Reverse(nums, 0, k-1)
    Reverse(nums, k, nums.length-1)
    Reverse(nums, 0, nums.length-1)
    RETURN nums
```
### ✅ Pseudo Code [ 🔁 Right Rotation by K (Optimal) ]
```js
FUNCTION rotateArrayRight_2(nums, k):
    k = k % nums.length
    Reverse(nums, 0, nums.length-k-1)
    Reverse(nums, nums.length-k, nums.length-1)
    Reverse(nums, 0, nums.length-1)
    RETURN nums
```
### ✅ Pseudo Code [ 🔁 Reverse Helper Function ]
```js
FUNCTION Reverse(arr, start, end):
    WHILE start <= end:
        SWAP arr[start] and arr[end]
        INCREMENT start, DECREMENT end
```
#### Complexity:
- Time - **O(n)** (3 passes over array)
- Space - **O(1)**
#### 💡 Explanation
- Reversal logic is used to smartly rotate arrays without extra space.
- This is the most efficient and cleanest solution for rotation problems.

---

#### ⚠️ Notes
- Always use k = k % n to handle k > n.
- All solutions modify the original array (nums) in-place.
- Works for both numeric and string arrays.