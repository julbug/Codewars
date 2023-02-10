// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//My Solution:
function XO(str) {
    let xCount = 0;
    let oCount = 0;
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (char === 'x') {
        xCount++;
      } else if (char === 'o') {
        oCount++;
      }
    }
    
    return xCount === oCount;
  }

  //This function takes in a single string as an argument and returns a boolean value. The function first declares two variables, xCount and oCount, and initializes them to 0. It then iterates through the characters of the string with a for loop, converting them to lowercase and checking to see if they are equal to either 'x' or 'o'. If so, it increments the respective counter variable. Finally, it returns true if the xCount and oCount variables are equal, and false otherwise.

  //Cleaner Solution:
  function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }