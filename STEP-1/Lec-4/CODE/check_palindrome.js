
// Palindrome Number

// This is the Brute Force Approach Using String
function isPalindrome_1(n) {
  const str = String(n);
  const rev = str.split('').reverse().join('');

  if(str === rev) {
    return true;
  }
  return false;
}

// This is the optimal Approach
function isPalindrome_2(n) {
  const num = n;
  let rev = 0;
  while(n > 0) {
    let rem = n % 10;
    rev = (rev * 10) + rem;
    n = Math.floor(n/10);
  }
  if(num === rev) {
    return true;
  }
  return false;
}