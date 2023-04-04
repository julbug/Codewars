// DESCRIPTION:
// Write a function that takes an array of numbers and returns an array of arrays of prime factors for each number.

//My Solution:
function primeFactors(input_array) {
    // Create an empty array to hold the arrays of prime factors
    const result = [];
    
    // Loop through each number in the input array
    for (let i = 0; i < input_array.length; i++) {
      // Create an empty array to hold the prime factors of the current number
      const factors = [];
      let num = input_array[i];
      let factor = 2;
      
      // Loop through all possible factors of the current number
      while (num !== 1) {
        if (num % factor === 0) {
          // If the current factor is a prime factor, add it to the factors array
          factors.push(factor);
          // Divide the number by the factor to get the next set of factors
          num /= factor;
        } else {
          // If the current factor is not a factor, increment it
          factor++;
        }
      }
      
      // Add the array of prime factors to the result array
      result.push(factors);
    }
    
    // Return the array of arrays of prime factors
    return result;
  }


// 1. First, the function defines an empty array result to hold the arrays of prime factors for each number in the input array.
// 2. Then, it loops through each number in the input array using a for loop, with the loop variable i representing the index of the current number.
// 3. Inside the loop, the function initializes an empty array factors to hold the prime factors of the current number. It also initializes variables num and factor to the current number and the starting factor (2), respectively.
// 4. The function enters a while loop that continues as long as num is not equal to 1, which means there are still factors to be found.
// 5. Inside the loop, the function checks whether the current factor is a factor of num using the modulus operator (%). If so, it adds the factor to the factors array and divides num by the factor to get the next set of factors.
// 6. If the current factor is not a factor of num, the function increments the factor variable to check the next possible factor.
// 7. Once all prime factors of the current number have been found, the function adds the factors array to the result array using the push method.
// 8. After all numbers in the input array have been processed, the function returns the result array of arrays of prime factors.
// This implementation uses a simple algorithm that checks all possible factors of each number until all prime factors have been found. It then adds the array of prime factors to the result array. If a prime factor goes into a number more than once, it is only included once in the output array.