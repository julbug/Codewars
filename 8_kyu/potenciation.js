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
  

// The function power(x, y) takes in two parameters x and y, representing the base and the exponent, respectively.

// The first conditional statement if (y === 0) checks if the exponent y is zero. If it is, the function immediately returns 1 since any number raised to the power of 0 is 1. This handles the special case mentioned in the prompt.

// If the exponent y is not zero, the code proceeds to the next step.

// The variable result is initialized with the value of the base x. This variable will hold the final result of x raised to the power of y.

// The for loop is used to iterate y - 1 times. The loop starts from i = 1 and continues as long as i is less than y. This is because we have already assigned result with the initial value of x, so we only need to multiply it y - 1 times more.

// Inside the loop, result is multiplied by x in each iteration. This effectively raises result to the power of x repeatedly, y - 1 times.

// After the loop completes, the final value of result is returned as the result of x raised to the power of y.