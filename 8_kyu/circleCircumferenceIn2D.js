// DESCRIPTION:
// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

// Write a function calculating circumference of a Circle.

// Tests round answers to 6 decimal places.


//MySolution:

// Define a Point class
function circleCircumference(circle) {
    const PI = Math.PI;
    return parseFloat((2 * PI * circle.radius).toFixed(6));
  }
  
  //Cleaner Solution:
  function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
  }