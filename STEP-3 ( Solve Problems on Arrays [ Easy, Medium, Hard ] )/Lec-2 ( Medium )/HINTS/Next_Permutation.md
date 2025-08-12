# 🔄 Next Permutation – Find Next Lexicographically Greater Sequence

## 🧩 Problem Statement
Given an array nums representing a permutation of numbers, rearrange the numbers into the next lexicographically greater permutation. <br>
If no such permutation exists (the array is in descending order), rearrange it to the lowest possible order (ascending). <br>
The replacement must be done in-place with O(1) extra memory.

```
**Example 1:**
- Input:  [1, 2, 3]
- Output: [1, 3, 2]

**Example 2:**
- Input:  [3, 2, 1]
- Output: [1, 2, 3]
```

---

## 💡 Hint
- Find the first decreasing element from the right → this is the break point.
- Swap it with the smallest number greater than it on the right.
- Reverse the numbers after that break point.

---

## 🧱 Brute Force Approach ( Finding all possible permutations )
### Approach :
- **Step 1**: Find all possible permutations of elements present and store them.
- **Step 2**: Search input from all possible permutations.
- **Step 3**: Print the next permutation present right after it.
#### Complexity:
- Time - **O(n! x n)** 
- Space - **O(n)**
#### 💡 Explanation

---

## ⚡ Optimal Approach – In-Place
### ✅ Pseudo Code
```js
FUNCTION nextPermutation(nums):
    n = length(nums)
    INDEX = -1

    // Step 1: Find the break point
    FOR i FROM n-2 DOWNTO 0:
        IF nums[i] < nums[i+1]:
            INDEX = i
            BREAK

    // If no break point found, reverse whole array
    IF INDEX == -1:
        REVERSE(nums, 0, n-1)
        RETURN nums

    // Step 2: Swap with smallest greater element from the right
    FOR i FROM n-1 DOWNTO INDEX+1:
        IF nums[i] > nums[INDEX]:
            SWAP(nums[i], nums[INDEX])
            BREAK

    // Step 3: Reverse elements after break point
    REVERSE(nums, INDEX+1, n-1)

    RETURN nums
```
#### Complexity:
- Time - **O(n)** Single pass to find break point + single pass to reverse.
- Space - **O(1)**
#### 💡 Explanation
- Break Point: The first element (from right) that is smaller than the next.
- Example: in [1, 3, 5, 4, 2] → break point is 3 at index 1.
- Swap: Find the smallest number on the right that is greater than break point and swap.
- Reverse: Ensures the suffix after break point is in the smallest order.
#### 🔍 Dry Run Example
- **Input**: **[1, 2, 3]**
- **Step 1**: Break point → **2** at index **1**
- **Step 2**: Swap **2** with **3** → **[1, 3, 2]**
- **Step 3**: Reverse suffix after index **1** → **[1, 3, 2]**
- ✅ **Output**: **[1, 3, 2]**

---

#### ⚠️ Notes
- Break Point: The first element (from right) that is smaller than the next.
- Example: in [1, 3, 5, 4, 2] → break point is 3 at index 1.
- Swap: Find the smallest number on the right that is greater than break point and swap.
- Reverse: Ensures the suffix after break point is in the smallest order.