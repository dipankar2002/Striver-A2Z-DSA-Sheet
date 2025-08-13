# 🔄 Rearrange Array in Alternating Positive and Negative Order

## 🧩 Problem Statement
Given an array nums, rearrange it so that positive and negative numbers appear alternately.
The order of appearance within positives or negatives can be ignored unless specified.

```markdown
**Example:**
- Input:  [3, 1, -2, -5, 2, -4]
- Output: [3, -2, 1, -5, 2, -4]
```

---

## 💡 Hint
- Brute force: Separate positives & negatives, then merge alternately.
- Optimal: Directly place positives at even indices, negatives at odd indices.
- Variant: Handle case when counts of positives and negatives differ.

---

## 🧱 Brute Force Approach
### ✅ Pseudo Code
```js
FUNCTION rearrangeArray_1(nums):
    pos = []
    neg = []
    FOR each num in nums:
        IF num > 0 → pos.push(num)
        ELSE → neg.push(num)
    FOR i in range(0, pos.length):
        nums[2*i] = pos[i]
        nums[2*i+1] = neg[i]
    RETURN nums
```
#### Complexity:
- Time - **O(n)** Two Passes
- Space - **O(n)**
#### 💡 Explanation
- First, split into positive & negative arrays.
- Then, fill alternating positions.

---

## ⚡ Optimal Approach – No Need for Two Arrays
### ✅ Pseudo Code
```js
FUNCTION rearrangeArray_2(nums):
    res = []
    pIndex = 0
    nIndex = 1
    FOR each num in nums:
        IF num > 0:
            res[pIndex] = num
            pIndex += 2
        ELSE:
            res[nIndex] = num
            nIndex += 2
    RETURN res
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)**
#### 💡 Explanation
- Place positives directly in even slots and negatives in odd slots in one pass.

---

# 🌀 Variant 2 – Unequal Positives & Negatives
There’s an array ‘**A**’ of size ‘**N**’ with positive and negative elements (not necessarily equal). <br>
Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values. <br>
The leftover elements should be placed at the very end in the same order as in array **A**.

```
**Example:**
- Input:  [1,2,-4,-5,3,4]
- Output: [1,-4,2,-5,3,4]
Explanation: 
- Positive elements = 1,2
- Negative elements = -4,-5
- To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.
- Leftover positive elements are 3 and 4 which are then placed at the end of the array.
```
## 🧱 Brute Force Approach
### ✅ Pseudo Code
```js
FUNCTION rearrangeArray_3(nums):
    pos = []   // store positive numbers
    neg = []   // store negative numbers

    // Step 1: Separate positives and negatives
    FOR i FROM 0 TO n-1:
        IF nums[i] > 0:
            pos.push(nums[i])
        ELSE:
            neg.push(nums[i])

    // Step 2: If positives are fewer
    IF length(pos) < length(neg):
        // Fill alternately until positives are used up
        FOR i FROM 0 TO length(pos)-1:
            nums[2*i] = pos[i]
            nums[2*i + 1] = neg[i]
        
        // Fill remaining negatives
        index = length(pos) * 2
        FOR i FROM length(pos) TO length(neg)-1:
            nums[index] = neg[i]
            index = index + 1

    // Step 3: If negatives are fewer or equal
    ELSE:
        // Fill alternately until negatives are used up
        FOR i FROM 0 TO length(neg)-1:
            nums[2*i] = pos[i]
            nums[2*i + 1] = neg[i]
        
        // Fill remaining positives
        index = length(neg) * 2
        FOR i FROM length(neg) TO length(pos)-1:
            nums[index] = pos[i]
            index = index + 1

    RETURN nums
```
#### Complexity:
- Time - **O(n)**
- Space - **O(n)**
#### 💡 Explanation
- If counts differ:
    - Fill alternately until one list runs out.
    - Append remaining elements to the end.

---

#### ⚠️ Notes
- Some interview versions require preserving original order → use queues instead of arrays.
- In-place rearrangement is trickier (often needs rotation or swapping).