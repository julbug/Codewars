// DESCRIPTION:
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//My Solution:
var greet = function(name) {
    name = name.toLowerCase().split(' ');
     for (var i = 0; i < name.length; i++) {
       name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1); 
     }
     return `Hello ${name.join(' ')}!`;
   };

   //Cleaner Solution:
   var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  };