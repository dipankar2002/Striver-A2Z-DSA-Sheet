
// Best time to buy and sell stock

// Brute Force Approach
function stockBuySell_1(nums) {
  let profit = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[k] > nums[i]) {
        profit = Math.max(nums[k] - nums[i], profit);
      }
    }
  }
  return profit;
}

// Optimal Approach
function stockBuySell_2(nums) {
  let min = nums[0];
  let profit = 0;
  for(let i = 1; i < nums.length; i++) {
    let cost = nums[i] - min;
    profit = Math.max(profit, cost);
    min = Math.min(min, nums[i]);
  }
  return profit;
}
