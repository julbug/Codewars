// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//My Solution:
function digitize(n) {
    return n.toString().split('').reverse().map(Number);
  }


// EXPLANATION:
// 'n.toString()' converts the number 'n' to a string.
// 'split('')' splits the string into an array of its digits.
// 'reverse()' reverses the order of the array.
// 'map(Number)' converts each element of the array back to a number.