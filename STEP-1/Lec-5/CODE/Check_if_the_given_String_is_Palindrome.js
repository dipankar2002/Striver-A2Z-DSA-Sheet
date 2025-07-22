
// Check if the given String is Palindrome or not

// This is Optimal Recursive Approach
function palindromeCheck_1(s,start) {
  if(start >= s.length/2) return true;
  if(s[start] !== s[s.length-start-1]) return false;
  return palindromeCheck_1(s,start+1,(s.length-start-1)-1);
}

let s = "ABCDCBA";
palindromeCheck_1(s,0);
console.log(palindromeCheck_1(s,0));