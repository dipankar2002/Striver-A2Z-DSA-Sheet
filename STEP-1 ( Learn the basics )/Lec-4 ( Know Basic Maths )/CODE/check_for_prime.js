
// Check if a number is prime or not

// This is the Brute Force Approach
function isPrime_1(n) {
  for(let i = 2; i < n; i++) {
    if(n%i === 0) {
      return false;
    }
  }
  return true;
}

// This is the optimal Approach
function isPrime_2(n) {
  let count = 0;
  for(let i = 1; i <= Math.sqrt(n); i++) { 
    if(n % i === 0) { 
        count++;
        if(n / i !== i) {
            count++;
        }
    }
  }
  if(count === 2) {
    return true;
  }
  return false;
}