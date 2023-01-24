// DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

//My Solution:
function sameCase(char1, char2) {
    //check if characters are letters
    if (!(char1.match(/[a-z]/i) && char2.match(/[a-z]/i))) {
        return -1;
    }
    //check if both characters are the same case
    if (char1 === char1.toUpperCase() && char2 === char2.toUpperCase()
        || char1 === char1.toLowerCase() && char2 === char2.toLowerCase()) {
        return 1;
    }
    //if both characters are letters, but not the same case
    return 0;
}
