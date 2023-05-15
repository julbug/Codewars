// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


//My Solution:
function findAverage(array) {
    // Initialize a variable to hold the sum of all the numbers
    let sum = 0;
    
    // Iterate through the array and calculate the sum
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    
    // Divide the sum by the length of the array to get the average
    const average = sum / array.length;
      
      if (array.length === 0){
        return 0
      } else{
        return average
      }
      }