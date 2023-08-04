// DESCRIPTION:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

//My Solution:
function replace(s){
    const replacedString = s.replace(/[aeiou]/gi, '!');
      return replacedString
    }


    //Cleaner Solution:
    function replace(s){
        return s.replace(/[aeoiu]/ig, '!')  
      }