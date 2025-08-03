
// Reverse a number

// This is the Brute Force Approach Using String
function reverseNumber_1(n) {
  let rev = String(n);
  return rev.split('').reverse().join('');
}

// This is the optimal Approach
function reverseNumber_2(n) {
  let rev = 0;
  while(n > 0) {
    let rem = n % 10;
    rev = (rev * 10) + rem;
    n = Math.floor(n/10);
  }
  return rev;
}