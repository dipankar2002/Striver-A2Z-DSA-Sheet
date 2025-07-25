
// Find the highest/lowest frequency element

// This is the Brute Force Approach
function findMaxMinFrequency_1(arr) {
  const n = arr.length;
  const visited = new Array(n).fill(false);
  let maxFreq = 0, minFreq = n;
  let maxEle = 0, minEle = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        visited[j] = true;
        count++;
      }
    }
    if (count > maxFreq) {
      maxFreq = count;
      maxEle = arr[i];
    }
    if (count < minFreq) {
      minFreq = count;
      minEle = arr[i];
    }
  }

  console.log("The highest frequency element is: " + maxEle);
  console.log("The lowest frequency element is: " + minEle);
}


// This is the optimal Approach using HashMap
function findMaxMinFrequency_2(arr) {
  const map = new Map();
  const n = arr.length;

  // Count frequencies
  for(let i = 1; i < n; i++) {
    let val = arr[i];
    map[val] = (map[val] || 0) + 1;
  }

  let maxFreq = 0, minFreq = n;
  let maxEle = 0, minEle = 0;

  // Traverse through the map
  for (let [element, count] of map.entries()) {
    if (count > maxFreq) {
      maxFreq = count;
      maxEle = element;
    }
    if (count < minFreq) {
      minFreq = count;
      minEle = element;
    }
  }
  console.log("The highest frequency element is: " + maxEle);
  console.log("The lowest frequency element is: " + minEle);
}