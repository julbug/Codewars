// DESCRIPTION:
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

//My Solution:
function otherAngle(a, b) {
    let c = a + b
    return 180 - c;
  }