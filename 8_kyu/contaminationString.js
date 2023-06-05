// DESCRIPTION:
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"


//My Solution:
function contamination(text, char){
    let length = text.length;
     const result = char.repeat(length);
     return result
     }

     //Cleaner Solution:
     function contamination(text, char){
        return char.repeat(text.length)
      }