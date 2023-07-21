// DESCRIPTION:
// You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

// If the input is 'H', return 'Hello World!'
// If the input is 'Q', return the input
// If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// For everything else, don't return anything (return null in C#, None in Rust).
// (+ has no visible effects so we can safely ignore it.)

//My Solution:
function HQ9(code) {
    if (code === "H") {
      return "Hello World!";
    } else if (code === "Q") {
      return code;
    } else if (code === "9") {
      // Generate the lyrics for 99 bottles of beer
      let lyrics = "";
      for (let i = 99; i > 1; i--) {
        lyrics += `${i} bottle${i > 1 ? "s" : ""} of beer on the wall, ${i} bottle${i > 1 ? "s" : ""} of beer.\n`;
        lyrics += `Take one down and pass it around, ${i - 1} bottle${i - 1 !== 1 ? "s" : ""} of beer on the wall.\n`;
      }
      lyrics += "1 bottle of beer on the wall, 1 bottle of beer.\n";
      lyrics += "Take one down and pass it around, no more bottles of beer on the wall.\n";
      lyrics += "No more bottles of beer on the wall, no more bottles of beer.\n";
      lyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.";
      return lyrics;
    } else {
      // Return undefined for all other cases
      return undefined;
    }
  }