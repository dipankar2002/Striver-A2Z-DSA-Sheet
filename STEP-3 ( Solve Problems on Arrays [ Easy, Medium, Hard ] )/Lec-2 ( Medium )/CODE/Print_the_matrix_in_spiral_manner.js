
// Print the matrix in spiral manner

// Optimal approach
function spiralOrder(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let res = new Array();

  // Pointing every sides end points
  let top = 0, left = 0, right = m-1, bottom = n-1;
  while(top <= bottom && left <= right) {
    // for moving left --> right
    for(let i = left; i <= right; i++) res.push(matrix[top][i]);
    top++;
    
    // for moving top --> bottom
    for(let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--;
    
    // for moving right --> left
    if(top <= bottom) {
      for(let i = right; i >= left; i--) res.push(matrix[bottom][i]);
      bottom--;
    }
    
    // for moving bottom --> top
    if(left <= right) {
      for(let i = bottom; i >= top; i--) res.push(matrix[i][left]);
      left++;
    }
  }
  return res;
}