// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



//My Solution:
function pigIt(str) {
    let words = str.split(" ");
    let newWords = [];
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.match(/^[a-zA-Z]+$/)) { // check if all characters are letters
        let firstLetter = word.charAt(0);
        let restOfWord = word.slice(1);
        newWords.push(restOfWord + firstLetter + "ay");
      } else {
        newWords.push(word);
      }
    }
  
    let newString = newWords.join(" ");
    return newString;
  }

  //Cleaner Solution:
  function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }