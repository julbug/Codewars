// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//My Solution:
function solution(str, ending){
    return ending === str.substr(str.length - ending.length);
    }

//Better Solution:
function solution(str, ending){
    return str.endsWith(ending);
  }

  //**The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.