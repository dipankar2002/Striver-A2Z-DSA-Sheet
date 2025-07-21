
// Print name N times using recursion

// This is the Recursive Approach
function func(_name,count) {
  let N = 5;
  if(count > N) return;
  console.log(_name)
  func(_name, count + 1);
}

const _name = "Gokuuuuu";
const count = 1;
func(_name,count);