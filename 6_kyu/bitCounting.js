// DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the  representation of that number. You can guarantee that input is non-negative.

// Example: The  representation of 1234 is 10011010010, so the function should return 5 in this case

//My Solution:
var countBits = function(n) {
    // Program Me
    let count = 0;
    let  = n.toString(2);
    for (let i = 0; i < length; i++) {
      if ([i] === '1') {
        count++;
      }
    }
    return count;
  }