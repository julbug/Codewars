// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-35)

// Note: The function accepts an integer and returns an integer.



//My Solution:
function squareDigits(num){
    let arr = num.toString().split("");
    let result = [];
    for(let i=0; i < arr.length; i++){
      result.push(Math.pow(arr[i],2));
    }
    return Number(result.join(""));
  }

  //This code is a function that squares each digit of a given number and concatenates them. It takes an integer as an argument, converts it to a string, splits it into an array of characters, squares each value in the array, joins the array back together, and returns it as an integer. Math.pow() is used to square each value, and Number() is used to convert the result back to an integer.

  //Other Solutions:
  //1)
  function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }

  //2)
  function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};