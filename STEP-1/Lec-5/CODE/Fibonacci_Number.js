
// Print Fibonacci Series up to Nth term

// This is the Iterative Approach
function fibonacci_1(n) {
  let fibo = 0;
  let a = 0;
  let b = 1;
  while(b < n) {
    fibo = a + b;
    a = b;
    b = fibo;
  }
  return a;
}

// This is the Multiple Recursive Approach
function fibonacci_2(n) {
  if(n <= 1) return n;
  let last = fibonacci_2(n-1);
  let secondLast = fibonacci_2(n-2);
  return last + secondLast;
}

console.log("by Iterative Approach");
console.log(fibonacci_1(3))
console.log("by Multiple Recursive Approach");
console.log(fibonacci_2(3))