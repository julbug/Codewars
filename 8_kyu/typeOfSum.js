// DESCRIPTION:
// Return the type of the sum of the two arguments




//My Solution:
function typeOfSum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return 'number';
    } else if (typeof a === 'string' || typeof b === 'string') {
      return 'string';
    } else {
      return 'number';
    }
  }

  //Cleaner Solution:
  function typeOfSum(a, b) {
    return typeof(a + b);
  }