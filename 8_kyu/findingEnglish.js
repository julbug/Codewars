// DESCRIPTION:
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

//My Solution:
function spEng(sentence) {
    // Create a case-insensitive regular expression for the word "English"
   const regex = /english/i; 
    
    // Test if the word "English" is found within the string
    return regex.test(sentence);
  }

  
  //Cleaner Solution:
  function spEng(s){
    return /english/i.test(s)
 }