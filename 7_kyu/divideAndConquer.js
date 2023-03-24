// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//My Solution:
function divCon(x){
    const numbersArray = x.filter(item => typeof item === 'number');
    const stringsArray = x.filter(item => typeof item === 'string');
      const number = stringsArray.map(item => Number(item));
      const total1 = numbersArray.reduce((acc, cur) => acc + cur, 0);
      const total2 = number.reduce((acc, cur) => acc + cur, 0);
      return total1 - total2
    
    }

// This code is a function called divCon. It takes one parameter, which is an array of numbers and strings mixed together.

// First, the code filters out all the numbers in the array and puts them in a new array called numbersArray. Then, it filters out all the strings in the array and puts them in a new array called stringsArray.

// After that, the code converts all the elements in the stringsArray to actual numbers and puts them in a new array called number.

// Then, the code uses the reduce method to add up all the numbers in the numbersArray and all the numbers in the number array.

// Finally, the code returns the difference between the two totals.

// In simpler terms, this code separates a mixed array of numbers and strings into two arrays, adds up all the numbers in both arrays, and subtracts the sum of the string numbers from the sum of the numeric numbers.

    //Cleaner Solution:
    function divCon(x){
        return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
      }