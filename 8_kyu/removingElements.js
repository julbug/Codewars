// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!




//My Solution:
function removeEveryOther(arr){
    const filteredArray = [arr[0], ...arr.filter((element, index) => index % 2 === 0 && index !== 0)];
    return filteredArray
  }



// 1. The code defines a function called removeEveryOther that takes an array arr as a parameter.
// 2. Inside the function, a new array called filteredArray is created. It is initialized with the first element of the input array, arr[0].
// 3. The spread operator (...) is used to concatenate the remaining elements to filteredArray. This is done by filtering the original array arr using the filter() method.
// 4. The filter() method takes a callback function with two parameters: element represents the current element being iterated, and index represents the index of the current element.
// 5. The condition index % 2 === 0 && index !== 0 checks if the index is even (index % 2 === 0) and not equal to zero (index !== 0). This ensures that every second element, starting from the second element, is included in the filtered array.
// 6. Finally, the filteredArray is returned as the result of the function.
// In summary, the removeEveryOther function takes an array as input and returns a new array that includes the first element and every other element (even-indexed elements) from the original array.