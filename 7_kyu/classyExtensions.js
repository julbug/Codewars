// DESCRIPTION:
// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.
// Task
// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
// The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

// Reference: JS, Ruby, Python.

//My Solution:
class Cat extends Animal {
    constructor(name) {
    super(name);
  }

  speak() {
    return `${this.name} meows.`;
  }
}

// In this implementation, the Cat class is defined with the extends keyword and it inherits from the Animal class. The constructor method is defined to accept a name parameter and pass it to the parent class constructor using the super keyword.

// The speak method is then overridden to return the cat's name followed by "meows." This is achieved by accessing the name property of the current object using this.name.

// With this implementation, you can create instances of the Cat class and call the speak method to hear them meow:

// const cat = new Cat("Mr Whiskers");
// console.log(cat.speak()); // Output: "Mr Whiskers meows."

//Cleaner Code:
class Cat extends Animal {
    speak() {
      return `${this.name} meows.`;
    }
  }