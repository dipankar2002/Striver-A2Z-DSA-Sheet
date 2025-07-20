
// Count all Digits of a Number

// This is the Brute Force Approach
function countDigit_1(n) {
  let c = 0;
  while(n > 0) {
    c++;
    n = Math.floor(n/10);
  }
  return c;
}

// This is the optimal Approach
function countDigit_2(n) {
  return Math.floor(Math.log10(n) + 1);
}