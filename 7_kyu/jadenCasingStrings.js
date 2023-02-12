// DESCRIPTION:
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//My Solution:
String.prototype.toJadenCase = function () {
    var words = this.split(" ");
    var capitalizedWords = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  };

  //This code is defining a new method that can be applied to strings. The method is called toJadenCase and it will convert a string into "Jaden Case", which is a term used to describe a sentence that has the first letter of each word capitalized.

//To do this, the method first splits the string into individual words and stores them in an array. It then uses the map function to iterate through each word and capitalize the first character of each word. Finally, it joins all the words back into a string and returns the result.