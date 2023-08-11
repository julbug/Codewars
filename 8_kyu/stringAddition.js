// DESCRIPTION:
// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.

//My Solution:
function joinStrings(string1, string2) {
    // Coerce any numbers to strings
    if (typeof string1 === 'number') {
        string1 = String(string1);
    }
    if (typeof string2 === 'number') {
        string2 = String(string2);
    }

    return `${string1} ${string2}`;
}

//Cleaner Solution:
function joinStrings(string1, string2){
    return `${string1} ${string2}`
 }
