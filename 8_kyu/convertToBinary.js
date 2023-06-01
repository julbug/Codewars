// DESCRIPTION:
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */




//My Solution:
function toBinary(n) {
    if (n === 0) {
      return 0; // Special case for 0
    }
  
    var binary = 0;
    var base = 1;
    while (n > 0) {
      binary += (n % 2) * base;
      n = Math.floor(n / 2);
      base *= 10;
    }
  
    return binary;
  }