
// Factorial of a Number : Iterative and Recursive

// This is the Iterative Approach
function factorial_1(n) {
  let factorial = 1;
  for(let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

// This is the Recursive Approach
function factorial_2(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return n * factorial_2(n-1);
}

console.log("by Iterative Approach");
console.log(factorial_1(5))
console.log("by Recursive Approach");
console.log(factorial_2(5))
