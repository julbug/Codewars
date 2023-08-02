// DESCRIPTION:
// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.



//My Solution:
function switchItUp(number) {
    // Create an array to store the names of numbers from "Zero" to "Nine"
    const numberNames = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    
    // Check if the input number is within the range of 0 to 9
    if (number >= 0 && number <= 9) {
      // If the number is valid, directly access the corresponding name from the array
      return numberNames[number];
    } else {
      // If the number is outside the valid range, return an error message
      return "Number out of range";
    }
  }