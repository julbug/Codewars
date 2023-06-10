// DESCRIPTION:
// The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata


//My Solution:
function power(x,y){
    if (y === 0) {
      return 1;
    }
  
    let result = x;
    for (let i = 1; i < y; i++) {
      result *= x;
    }
  
    return result;
  }


  //Cleaner Solution:
  function power(x,y){
    return x**y;
  }
  