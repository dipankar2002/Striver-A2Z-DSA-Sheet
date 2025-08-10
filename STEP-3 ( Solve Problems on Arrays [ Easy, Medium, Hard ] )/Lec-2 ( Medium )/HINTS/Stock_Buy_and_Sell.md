# 💹 Best Time to Buy and Sell Stock

## 🧩 Problem Statement
- You are given an array **nums** where **nums[i]** is the price of a stock on the **i-th** day.
- You may choose one day to buy and one day to sell.
- Return the maximum profit you can achieve.
- If no profit can be made, return **0**.

```
**Example:**
- Input:  nums = [7,1,5,3,6,4]
- Output: 5
- Explanation: Buy on day 2 (price=1) and sell on day 5 (price=6).
```

---

## 💡 Hint
- Brute force: Try every possible buy-sell pair.
- Optimal: Track minimum price so far and calculate possible profit.

---

## 🧱 Brute Force Approach
### ✅ Pseudo Code
```js
FUNCTION stockBuySell_1(nums):
    profit = 0
    FOR i = 0 TO n-1:
        FOR j = i+1 TO n-1:
            IF nums[j] > nums[i]:
                profit = MAX(profit, nums[j] - nums[i])
    RETURN profit
```
#### Complexity:
- Time - **O(n²)**
- Space - **O(1)**
#### 💡 Explanation
- Check all possible buy (**i**) and sell (**j**) days.
- Keep the maximum profit found.
- Very slow for large arrays.

---

## ⚡ Optimal Approach – Single Pass
### ✅ Pseudo Code
```js
FUNCTION stockBuySell_2(nums):
    minPrice = nums[0]
    profit = 0
    FOR i = 1 TO n-1:
        cost = nums[i] - minPrice
        profit = MAX(profit, cost)
        minPrice = MIN(minPrice, nums[i])
    RETURN profit
```
#### Complexity:
- Time - **O(n)**
- Space - **O(1)**
#### 💡 Explanation
- Keep track of:
    - minPrice → lowest price so far (buying point)
    - profit → max profit so far
- On each day:
    - Calculate profit if sold today.
    - Update max profit.
    - Update minPrice if today’s price is lower.

---

#### ⚠️ Notes
- Works for cases where no profit is possible → returns **0**.
- Variations in interviews:
    - Buy and sell multiple times (Leetcode 122).
    - With cooldown period after selling (Leetcode 309).
    - With transaction fee.