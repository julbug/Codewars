// DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.





//My Solution:
const binaryArrayToNumber1 = arr => {
    // Reverse the binary array
    const reversedBinaryArray = arr.reverse();
  
  // Convert binary digits to decimal values
  let decimalValue = 0;
  for (let i = 0; i < reversedBinaryArray.length; i++) {
    decimalValue += reversedBinaryArray[i] * Math.pow(2, i);
    }
    return decimalValue
  };

// 1. It takes an input array as an argument, which represents the binary number.
// 2. It reverses the input array so that the least significant bit (the one that represents the smallest value) is the first element, and the most significant bit (the one that represents the largest value) is the last element.
// 3. It then loops through the reversed binary array and converts each binary digit to its decimal equivalent using the formula digit * 2^i, where digit is the binary digit (either 0 or 1) and i is the position of the digit in the array, starting from 0 for the least significant bit.
// 4. It adds up the decimal values of all the binary digits to obtain the decimal equivalent of the binary number.
// 5. Finally, it returns the decimal value as the output of the function.
// In simpler terms, this function takes a bunch of 0's and 1's that represent a binary number, rearranges them a bit, does some math to turn them into a regular number, and then gives you that regular number as the result.



//Cleaner Solution:
const binaryArrayToNumber2 = arr => {
    return parseInt(arr.join(""), 2)
  };