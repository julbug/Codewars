// DESCRIPTION:
// Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript. Typically, these methods won't change the size of the string.

// For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.

// However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?

// For example, in Ruby, That means str.upcase.downcase.size > str.size

// You should just set the value of STRANGE_STRING to meet the previous criteria.

// Note: Meta programming is not allowed in this kata. So, the size of your solution is limited.


//My Solution:
const STRANGE_STRING = 'ß';


// The core of the problem is to find a string whose length increases when you convert it to uppercase and then back to lowercase.

// The character 'ß' is a German letter called "Eszett" or "sharp S". When you convert this character to uppercase in Unicode (which JavaScript uses for its string encoding), it becomes "SS". Here's a breakdown:

// 'ß' is the original character.
// 'ß'.toUpperCase() becomes 'SS'.
// 'SS'.toLowerCase() becomes 'ss'.
// Now, let's compare the lengths:

// Original string: 'ß' — Length: 1
// Transformed string: 'ss' — Length: 2

// Thus, we can see that the length of the transformed string is indeed greater than the original.