// Rotate Image by 90 degree

// Brute Force approach
function rotateMatrix_1(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let res = Array.from({ length: n }, () => new Array(m).fill(0));
  
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      res[k][n-1-i] = matrix[i][k];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      matrix[i][k] = res[i][k];
    }
  }
  return matrix;
}

// Optimal approach
function rotateMatrix_2(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  // Step 1 - Transpose the matrix ( transposing means changing columns to rows and rows to columns )
  for(let i = 0; i < n; i++) {
    for(let k = i; k < m; k++) {
      [ matrix[i][k], matrix[k][i] ] = [ matrix[k][i], matrix[i][k] ]
    }
  }
  // Step 2 - Reverse each row of the matrix
  for(let i = 0; i < n; i++) {
    let left = 0;
    let right = m-1;
    while(left <= right) {
      [ matrix[i][left], matrix[i][right] ] = [ matrix[i][right], matrix[i][left] ];
      left++;
      right--;
    }
  }
  return matrix;
}