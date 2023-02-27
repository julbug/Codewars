// DESCRIPTION:
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//My Solution:

function isTriangle(a,b,c) {
    return (a + b > c) && (b + c > a) && (a + c > b) && (a > 0) && (b > 0) && (c > 0);
  }


// This code is a function called isTriangle which takes three parameters (a, b, c). It checks if the sum of any two sides is greater than the third side and also if all sides are greater than 0. If both of these conditions are true, it returns true, otherwise it returns false.