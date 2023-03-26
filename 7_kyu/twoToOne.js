// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//My Solution:
function longest(s1, s2) {
    const combinedStr = s1.concat(s2);
    const uniqueChars = Array.from(new Set(combinedStr.split('')));
    const sortedString = uniqueChars.sort().join('');
    return sortedString;
  }

  //Cleaner Solution 1:
  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
  
  //Cleaner Solution 2:
  function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }