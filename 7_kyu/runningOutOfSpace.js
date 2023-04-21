// DESCRIPTION:
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']




//My Solution:
function spacey(array){
    let result = [array[0]]; // initialize the result with the first element of the array
  
    for (let i = 1; i < array.length; i++) {
      result.push(result[i-1] + array[i]); // concatenate each element with the previous elements to generate the next element in the result array
    }
  
    return result;
  }

  //Cleaner Solution:
  function spacey(array){
	let string = ''
	return array.map( (e) => string += e )
}