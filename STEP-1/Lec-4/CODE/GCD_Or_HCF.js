
// GCD of Two Numbers

// This is the Brute Force Approach
function GCD_1(n1,n2) {
  let gcd = 1;
  for(let i = 1; i <= Math.min(n1,n2); i++) {
    if(n1%i === 0 && n2%i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

// This is the Better Approach
function GCD_2(n1,n2) {
  for(let i = Math.min(n1,n2); i > 0; i--) {
    if(n1%i === 0 && n2%i === 0) {
      return i;
    }
  }
  return 1;
}

// This is the optimal Approach
function GCD_3(n1,n2) {
  while(n1 > 0 && n2 > 0) {
    if(n1 > n2) {
      n1 = n1 % n2;
    } else {
      n2 = n2 % n1;
    }
  }
  if(n1 === 0) return n2;
  return n1;
}