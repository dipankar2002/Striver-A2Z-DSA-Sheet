
// Print N to 1 using Recursion

// This is the Recursive Approach
function printNumbers_1(i,n) {
  if(i > n) return;
  console.log(n);
  printNumbers_1(i,n-1);
}

// This is the Backtracking Approach
function printNumbers_2(i,n) {
  if(i > n) return;
  printNumbers_2(i+1,n)
  console.log(i);
}

let n = 5;
console.log("by Simple Recursive Approach");
printNumbers_1(1,n);
console.log("by Simple Backtracking Approach");
printNumbers_2(1,n);