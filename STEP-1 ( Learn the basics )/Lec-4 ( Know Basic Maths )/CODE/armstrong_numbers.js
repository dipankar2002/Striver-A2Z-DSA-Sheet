
// Check if the Number is Armstrong

// This is the optimal Approach
function isArmstrong_1(n) {
  const k = String(n).length;
  let sum = 0;
  const num = n;
  while (n > 0) {
      const rem = n % 10;
      sum += Math.pow(rem, k);
      n = Math.floor(n / 10);
  }
  return sum === num ? true : false;
}