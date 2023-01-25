// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My Solution:
const vowels = ["a", "e", "i", "o", "u"]

function getCount(str) { 
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    // return number of vowels
    return count
}

//Better Solution:
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }