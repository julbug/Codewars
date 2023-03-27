// DESCRIPTION:
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


//My Solution:
function removeSmallest(numbers) {
    if (numbers.length <= 1) {
      return [];
    }
    const minIndex = numbers.indexOf(Math.min(...numbers));
    const result = [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
    return result;
  }

//   function removeSmallest(numbers) {
// 1.    This line defines a function called removeSmallest that takes an array of numbers as input, and will return a new array with the smallest number removed.


//       if (numbers.length <= 1) {
//         return [];
//       }
// 2.    This checks if the input array has only one element, in which case there is no smallest element to remove, so it returns an empty array.


//       const minIndex = numbers.indexOf(Math.min(...numbers));
// 3.    This line finds the index of the smallest number in the input array. The Math.min function returns the smallest number in the array, and the indexOf function finds the first occurrence of that number in the array.
    

//       const result = [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
// 4.    This line creates a new array called result that contains all the elements of the input array except for the smallest element. The slice method creates a new array that contains a portion of the original array, and the spread operator (...) is used to combine two such arrays into one.
    
//       return result;
//     }
// 5.    This line returns the new array result that has the smallest element removed.
    
//     So overall, the removeSmallest function checks if the input array has only one element, finds the index of the smallest element in the input array, and creates a new array that contains all the elements of the input array except for the smallest element. The new array is returned as the output of the function.
  

  //Cleaner Solution:
  function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }