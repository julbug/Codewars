// DESCRIPTION:
// Write a function that takes an array of numbers and finds all prime numbers from that array and returns them in a sorted array. Avoid using math libraries to determine whether the number is prime.


//My Solution:
function sortedPrimes(input_array) {
    // Create an empty array to hold the prime numbers
    const result = [];
    
    // Loop through each number in the input array
    for (let i = 0; i < input_array.length; i++) {
      const num = input_array[i];
      // Initialize a flag to track if the number is prime
      let isPrime = true;
      
      // Check if the number is less than 2
      if (num < 2) {
        isPrime = false;
      } else {
        // Loop through all numbers from 2 to the square root of the number
        for (let j = 2; j <= Math.sqrt(num); j++) {
          // If the number is divisible by any number in that range, it's not prime
          if (num % j === 0) {
            isPrime = false;
            break; // Stop looping through factors once one is found
          }
        }
      }
      
      // If the number is prime, add it to the primes array
      if (isPrime) {
        result.push(num);
      }
    }
    
    // Sort the primes array in ascending order and return it
    return result.sort((a, b) => a - b);
  }

// 1. First, the function defines an empty array primes to hold the prime numbers that are found in the input array.
// 2. Then, it loops through each number in the input array using a for loop, with the loop variable i representing the index of the current number.
// 3. Inside the loop, the function initializes a flag isPrime to true, which will be used to track whether the current number is prime or not.
// 4. The function then checks if the current number num is less than 2, which is not a prime number. If so, it sets the isPrime flag to false.
// 5. Otherwise, the function enters a nested for loop that checks for factors of the number. This loop starts at 2 and iterates up to the square root of the number (inclusive).
// 6. For each number j in the range, the function checks whether the current number num is divisible by j using the modulus operator (%). If so, it sets the isPrime flag to false and breaks out of the loop, since the number is not prime.
// 7. If the number is prime (i.e., the isPrime flag is still true), the function adds it to the primes array using the push method.
// 8. Finally, the function sorts the primes array in ascending order using the sort method with a comparison function that subtracts the second number from the first ((a, b) => a - b), and returns the sorted primes array.
// This implementation uses a simple algorithm to determine whether a number is prime or not, which checks for factors up to the square root of the number. This makes it more efficient than checking all factors up to the number itself, since any factor larger than the square root must also have a corresponding factor smaller than the square root. The implementation also uses a flag isPrime to track whether a number is prime or not, and avoids using a separate helper function for checking primality.