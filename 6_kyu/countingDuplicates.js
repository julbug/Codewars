// DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


//My Solution:
function duplicateCount(text){
    let charCount = {};
    let result = 0;
   
    // Count occurences of each character
    for (let i = 0; i < text.length; i++) {
      let currentChar = text[i].toLowerCase();
      if (charCount[currentChar]) {
        charCount[currentChar] += 1;
      } else {
        charCount[currentChar] = 1;
      }
    }
   
    // Increment result if character appears more than once
    for (let char in charCount) {
      if (charCount[char] > 1) {
        result += 1;
      }
    }
   
    return result;

//1. The function is named countRepeatingChars and it takes a string as an argument.
//2. Inside the function, two variables are declared: charCount (an empty object) and result (which is set to 0).
//3. A for loop is used to iterate through each character of the string. The current character is converted to lowercase and stored in the variable currentChar.
//4. An if statement is used to check if the current character is already in the charCount object. If it is, the value of that key is incremented by


//Cleaner Solution:
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }