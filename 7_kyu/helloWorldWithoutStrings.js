// DESCRIPTION:
// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`
// Good luck and try to be as creative as possible!


//My Solution:
const helloWorld = () => {
    const H = String.fromCharCode(72);
    const e = String.fromCharCode(101);
    const l1 = String.fromCharCode(108);
    const l2 = String.fromCharCode(108);
    const o = String.fromCharCode(111);
    const comma = String.fromCharCode(44);
    const space = String.fromCharCode(32);
    const W = String.fromCharCode(87);
    const r = String.fromCharCode(114);
    const d = String.fromCharCode(100);
    const exclamation = String.fromCharCode(33);
    
    // concatenate the individual characters into a string
    return H + e + l1 + l2 + o + comma + space + W + o + r + l1 + d + exclamation;
  }

  //Cleaner Solution:
  const helloWorld = () => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);
