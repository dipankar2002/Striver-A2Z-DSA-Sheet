
// Print all Divisors of a given Number

// This is the Brute Force Approach
function divisors_1(n) {
  let divisors = [];
  for(let i = 1; i <= n; i++) {
    if(n%i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
// console.log(divisors_1(8))

// This is the optimal Approach
function divisors_2(n) {
  let divisors = [];
  const sqrtN = Math.sqrt(n);
  for(let i = 1; i <= sqrtN; i++) {
    if(n%i === 0) {
      divisors.push(i);
      if(i !== (n/i)) {
        divisors.push(n/i);
      }
    }
  }
  return divisors;
}