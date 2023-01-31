// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My Solution:
function findShort(s) {
    let words = s.split(' ');
    let shortestWord = words[0];
      
    for (let i = 0; i < words.length; i++) {
      if (words[i].length < shortestWord.length) {
        shortestWord = words[i];
      }
    }
    return shortestWord.length;
  }

  //This code is a function that takes in a string of words and returns the length of the shortest word. The function splits the string into individual words and assigns the first word to a variable called shortestWord. It then uses a for loop to loop through the words and compares the length of each word to the length of the shortestWord. If the current word has a shorter length, it assigns that word to the shortestWord variable. Finally, it returns the length of the shortestWord.