
// Sum of First N Numbers

// This is the Parameterised Recursive Approach
function NnumbersSum_1(i,sum) {
  if(i < 1) {
    console.log(sum)
    return;
  } 
  NnumbersSum_1(i-1,sum+i);
}

// This is the Functional Recursive Approach
function NnumbersSum_2(n) {
  if(n < 1) return 0;
  return n + NnumbersSum_2(n-1);
}

let n = 5;
console.log("by Parameterised Recursive Approach");
NnumbersSum_1(n,0);
console.log("by Functional Recursive Approach");
console.log(NnumbersSum_2(n));