// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//My Solution:
function abbrevName(name){
    let initials = name.split(/\s/)
                       .map(word => word.slice(0,1).toUpperCase())
                       .join('.');
    return initials;
  }

  //OTHER METHOD
  function abbrevName(name) {
    // Split the name into an array of words based on whitespace.
    let initialsArray = name.split(/\s/);
    
    // Use the `map()` method to get the first letter of each word and convert it to uppercase.
    let initials = initialsArray.map(word => word.slice(0,1).toUpperCase());
    
    // Use the `join()` method to concatenate the initials with a dot in between.
    return initials.join('.');
  }

// The function abbrevName takes a name argument, which is a string representing a full name.

// The first line of the function splits the name into an array of words using a regular expression (/\s/). The regular expression matches any whitespace character (space, tab, newline, etc.) in the string, so it effectively splits the string into words based on spaces.

// The map() method is then used on the initialsArray array to iterate over each word in the array and get the first letter of the word using the slice() method. The toUpperCase() method is called on the result of slice() to convert the letter to uppercase.

// The result of map() is an array of uppercase letters, one for each word in the initialsArray.

// The join() method is then used to concatenate the letters with a dot in between. This creates the final result, which is the initials of the name with a dot in between each letter.

// The function returns the result.