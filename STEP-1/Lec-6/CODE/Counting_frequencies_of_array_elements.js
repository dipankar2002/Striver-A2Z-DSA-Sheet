
// Count frequency of each element in the array

// This is the Brute Force Approach
function countFrequencies_1(arr) {
  const n = arr.length;
  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (visited[i] === true) continue;

    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        visited[j] = true;
        count++;
      }
    }
    console.log(arr[i] + " " + count);
  }
}


// This is the optimal Approach using HashMap
function countFrequencies_2(arr) {
  const n = arr.length;
  let map = new Map();
  for(let i = 1; i < n; i++) {
    let val = arr[i];
    map[val] = (map[val] || 0) + 1;
  }
  for(key in map) {
    console.log(key + " " + map[key]);
  }
}