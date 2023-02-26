// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"


//My Solution:

function maskify(str) {
    let result = '';
    if (str.length < 5) return str;
    for (let i = 0; i < str.length - 4; i++) result += '#';
    return result + str.slice(-4);
  }

  //The function takes in a string as an argument. First, we create an empty string called result. Then, we check to see if the length of the string is less than 5; if it is, we return the string. Otherwise, we loop through the string (except the last 4 characters) and add '#' to the result string. Finally, we add the last four characters of the string to the result, and return the result.

  //Cleaner Solution:
  //1.
  function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
  }

  //2.
  function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
  }

  //3.
  function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }