// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



//My Solution: 
function fakeBin(x){
    let result = "";
    
    for (let i = 0; i < x.length; i++) {
      let num = parseInt(x[i]);
    
      if (num < 5) {
        result += "0";
      } else {
        result += "1";
      }
    }
      return result; 
      }
    

      //Cleaner Solution:
      function fakeBin(x) {
        return x.split('').map(n => n < 5 ? 0 : 1).join('');
    }