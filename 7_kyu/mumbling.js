// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//My Solution:
function accum(str) {
    let outputStr = '';
   for (let i = 0; i < str.length; i++) {
     outputStr += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + '-';
   }
   return outputStr.slice(0, -1);
 }

 //This function takes in a string as an argument and uses a for loop to iterate through each character of the string. For each character, the function builds a new string by adding the uppercase version of the character, followed by the lowercase version of the character repeated the number of times equal to the current index of the for loop, and then adds a hyphen. The loop continues this process until all characters in the string have been processed. Finally, the function returns the built string with the last hyphen removed.