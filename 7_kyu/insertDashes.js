// DESCRIPTION:
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).


//My Solution:
function insertDash(num) {
    let digits = num.toString().split('').map(Number);
    let result = '';
    
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] % 2 === 0) {
        result += digits[i];
      } else if (i > 0 && digits[i-1] % 2 !== 0) {
        result += '-' + digits[i];
      } else {
        result += digits[i];
      }
    }
       return result;
    }

    //Cleaner Solution:
    function insertDash(num) {
        return num.toString().replace(/[13579](?=[13579])/g, "$&-");
     }