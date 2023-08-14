// DESCRIPTION:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"



//My Solution:
function remove (string) {  
    while (string.endsWith('!')) {
        string = string.substring(0, string.length - 1);
    }
    return string;
}


//Cleaner Solution:
function remove(s){
    return s.replace(/!+$/, '');
  }