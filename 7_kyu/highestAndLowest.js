// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//My Solution:
function highAndLow(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
  }


  //Cleaner Solution:
  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }
  

  //This code is a function called 'highAndLow' that takes a string of numbers as an argument. The function first splits the string into an array of numbers using the split method. It then returns a string containing the highest number from the array followed by the lowest number from the array, separated by a space. The Math.max and Math.min methods are used to determine the highest and lowest numbers in the array, respectively.