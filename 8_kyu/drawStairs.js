// DESCRIPTION:
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

//My Solution:
function drawStairs(n) {
    // Variable to store the final result
    var stairs = "";
  
    // Iterate from 0 to n-1
    for (var i = 0; i < n; i++) {
      // Create a string with the required number of spaces
      var spaces = " ".repeat(i);
  
      // Concatenate the spaces, letter "I", and a line break
      stairs += spaces + "I\n";
    }
  
    // Remove the last newline character
    stairs = stairs.slice(0, -1);
  
    // Return the stairs
    return stairs;
  }

  //Cleaner Solution:
  const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
