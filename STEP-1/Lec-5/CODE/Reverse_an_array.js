
// Reverse a given Array

// This is with 1 extra parameter(end) Recursive Approach
function reverse_1(arr,start,end) {
  if(start === end) return;
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  reverse_1(arr,start+1,end-1);
}

// This is Optimal Recursive Approach
function reverse_2(arr,start) {
  if(start === arr.length-start-1) return;
  let temp = arr[start];
  arr[start] = arr[arr.length-start-1];
  arr[arr.length-start-1] = temp;
  reverse_2(arr,start+1);
}

let arr = [1,2,3,4,5];
console.log(arr);
console.log();
reverse_1(arr,0,arr.length-1);
console.log(arr);
console.log();
reverse_2(arr,0);
console.log(arr);