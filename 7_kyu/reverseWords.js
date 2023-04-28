// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"





//My Solution:
function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    }


    // 1. The function takes a string (str) as input.
    // 2. It splits the string into an array of words using the space character as the delimiter: str.split(' ').
    // 3. It uses the map function to iterate over each word in the array.
    // 4. For each word, it splits the word into an array of individual characters: word.split('').
    // 5. It applies the reverse() function to the array of characters to reverse their order.
    // 6. It joins the reversed array of characters back into a word using an empty string as the separator: word.split('').reverse().join('').
    // 7. The map function returns an array of reversed words.
    // 8. Finally, it joins the reversed words back into a single string using a space as the separator: arrayOfReversedWords.join(' ').
    // 9. The function returns the reversed string of words.
    // In simpler terms, the function splits the input string into individual words. It then reverses the order of characters within each word. After that, it joins the reversed words back together, resulting in a string where the order of words is reversed while preserving the letters within each word.   