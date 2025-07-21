
// Print 1 to N using Recursion

// This is the Recursive Approach
function printNumbers_1(i,n) {
  if(i > n) return;
  console.log(i);
  printNumbers_1(i+1,n);
}

// This is the Backtracking Approach
function printNumbers_2(i,n) {
  if(i < 1) return;
  printNumbers_2(i-1,n);
  console.log(i);
}

let n = 5;
console.log("by Simple Recursive Approach");
printNumbers_1(1,n);
console.log("by Simple Backtracking Approach");
printNumbers_2(n,n);
