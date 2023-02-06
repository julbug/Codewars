// DESCRIPTION:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//My Solution:
function arrayDiff(a, b) {
    let result = [];
    a.forEach(el => {
      if (!b.includes(el)) {
        result.push(el);
      }
    });
    return result;
  }

  //This code is defining a function called arrayDiff, which takes in two arrays (a and b) as parameters. It then declares an empty array called result. It then uses a forEach loop to iterate through the elements of array a. For each element, it checks if the element is present in array b using the includes method. If the element is not present in b, it pushes the element to the result array. Finally, it returns the result array.