
// Pattern - 1
/* 
  * * * * *
  * * * * *
  * * * * *
  * * * * *
  * * * * *
*/

function pattern_1(n) {
  for(let i = 0; i < n; i++) {
    for(let k = 0; k < n; k++) {
      process.stdout.write(' *');
    }
    console.log();
  }
}


// Pattern - 2
/* 
  * 
  * *
  * * * 
  * * * * 
  * * * * *
*/

function pattern_2(n) {
  for(let i = 0; i <= n; i++) {
    for(let k = 0; k < i; k++) {
      process.stdout.write(' *');
    }
    console.log();
  }
}


// Pattern - 3
/* 
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5
*/

function pattern_3(n) {
  for(let i = 0; i <= n; i++) {
    let num = 1;
    for(let k = 0; k < i; k++) {
      process.stdout.write(num + " ");
      num++;
    }
    console.log();
  }
}


// Pattern - 4
/* 
  1
  2 2
  3 3 3
  4 4 4 4
  5 5 5 5 5
*/
 
function pattern_4(n) {
  for(let i = 0; i <= n; i++) {
    for(let k = 0; k < i; k++) {
      process.stdout.write(i + " ");
    }
    console.log();
  }
}

// Pattern - 5
/* 
  * * * * *
  * * * *
  * * *
  * *
  *
*/

function pattern_5(n) {
  for(let i = n; i > 0; i--) {
    for(let k = 0; k < i; k++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// Pattern - 6
/* 
  1 2 3 4 5
  1 2 3 4
  1 2 3
  1 2
  1
*/

function pattern_6(n) {
  for(let i = n; i > 0; i--) {
    let num = 1;
    for(let k = 0; k < i; k++) {
      process.stdout.write(num + " ");
      num++;
    }
    console.log();
  } 
}

// Pattern - 7
/*  
          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
*/

function pattern_7(n) {
  for(let i = 0; i < n; i++) {
    for(let k = 0; k < n-i-1; k++) {
      process.stdout.write("  ");
    }
    for(let s = 0; s < (2*i)+1; s++) {
      process.stdout.write("* ");
    }
    for(let k = 0; k < n-i-1; k++) {
      process.stdout.write("  ");
    }
    console.log();
  } 
}


// Pattern - 8
/*  
  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *
*/

function pattern_8(n) {
  for(let i = n-1; i >= 0; i--) {
    for(let k = 0; k < n-i-1; k++) {
      process.stdout.write("  ");
    }
    for(let s = 0; s < (2*i)+1; s++) {
      process.stdout.write("* ");
    }
    for(let k = 0; k < n-i-1; k++) {
      process.stdout.write("  ");
    }
    console.log();
  } 
}

// Pattern - 9
/*  
          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *
*/

function pattern_9(n) {
  pattern_7(n)
  pattern_8(n)
}

// Pattern - 10
/*  
  *
  * *
  * * *
  * * * *
  * * * * *
  * * * *
  * * *
  * *
  *
*/

function pattern_10(n) {
  for(let i = 0; i <= n*2-1; i++) {
    if(i > n) {
      for(let k = 0; k < 2*n-i; k++) {
        process.stdout.write("* ");
      }
    } else {
      for(let k = 0; k < i; k++) {
        process.stdout.write("* ");
      }
    }
    console.log();
  }
}

// Pattern - 11
/*  
  1
  0 1
  1 0 1
  0 1 0 1
  1 0 1 0 1
*/

function pattern_11(n) {
  let num = 1;
  for(let i = 0; i < n; i++) {
    num = i%2 === 0 ? 1 : 0;
    for(let k = 0; k <= i; k++) {
      process.stdout.write(num + " ");
      num = 1 - num;
    }
    console.log();
  }
}

// Pattern - 12
/*  
  1                 1
  1 2             2 1
  1 2 3         3 2 1
  1 2 3 4     4 3 2 1
  1 2 3 4 5 5 4 3 2 1
*/

function pattern_12(n) {
  let num = 1;
  for(let i = 0; i < n; i++) {
    for(let k = 1; k <= num; k++) {
      process.stdout.write(k + " ");
    }
    for(let k = 0; k < 2 * (n-1) - 2*i; k++) {
      process.stdout.write("  ");
    }
    for(let k = num; k >= 1; k--) {
      process.stdout.write(k + " ");
    }
    console.log();
    num++;
  }
}

// pattern_1(5)
// pattern_2(5)
// pattern_3(5)
// pattern_4(5)
// pattern_5(5)
// pattern_6(5)
// pattern_7(5)
// pattern_8(5)
// pattern_9(5)
// pattern_10(5)
// pattern_11(5)
pattern_12(5)