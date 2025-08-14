// Set Matrix Zeroes

// Brute force approach - This approach is only for a binary matrix ( 0, 1 )
function setZeroes_1(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  // Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      if (matrix[i][k] === 0) {
        markRow(matrix, n, m, i);
        markCol(matrix, n, m, k);
      }
    }
  }
  // Finally, mark all -1 as 0:
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      if (matrix[i][k] === -1) {
        matrix[i][k] = 0;
      }
    }
  }
  return matrix;
}
function markRow(matrix, n, m, i) {
  // set all non-zero elements as -1 in the row i:
  for (let k = 0; k < m; k++) {
    if (matrix[i][k] !== 0) {
      matrix[i][k] = -1;
    }
  }
}
function markCol(matrix, n, m, k) {
  // set all non-zero elements as -1 in the col k:
  for (let i = 0; i < n; i++) {
    if (matrix[i][k] !== 0) {
      matrix[i][k] = -1;
    }
  }
}
//---------------------------------------------------------------------------------------------------------
// Better approach
function setZeroes_2(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      if (matrix[i][k] === 0) {
        row[i] = 1;
        col[k] = 1;
      }
    }
  }
  console.log(row);
  console.log(col);
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      if (row[i] === 1 || col[k] === 1) {
        matrix[i][k] = 0;
      }
    }
  }
  return matrix;
}
//---------------------------------------------------------------------------------------------------------
// Optimal approach
function setZeroes_3(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  let col0 = 1;
  // Step 1: Traverse the matrix and mark 1st row & col accordingly:
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      if (matrix[i][k] === 0) {
        // Mark i-th row:
        matrix[i][0] = 0;
        // Mark k-th column:
        if (k !== 0) {
          matrix[0][k] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }
  // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
  for (let i = 1; i < n; i++) {
    for (let k = 1; k < m; k++) {
      if (matrix[i][k] !== 0) {
        // Check for col & row:
        if (matrix[i][0] === 0 || matrix[0][k] === 0) {
          matrix[i][k] = 0;
        }
      }
    }
  }
  // Step 3: Finally mark the 1st col & then 1st row:
  if (matrix[0][0] === 0) {
    for (let k = 0; k < m; k++) {
      matrix[0][k] = 0;
    }
  }
  if (col0 === 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
}