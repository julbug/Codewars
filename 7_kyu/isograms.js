// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//My Solution:
function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.length;
    }

    //This function takes in a string as an argument and checks if it is an isogram. An isogram is a word that does not contain any repeating letters. The function does this by first converting the string to all lowercase letters, then creating a set of the characters in the string, and finally comparing the length of the set to the length of the original string. If the lengths are equal, then the word is an isogram and the function returns true. Otherwise, it returns false.