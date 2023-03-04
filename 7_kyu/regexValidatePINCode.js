// DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//My Solution:
function validatePIN (pin) {
    for (let i = 0; i <pin.length; i++) {
        const char = pin.charAt(i);
        if (char < "0" || char > "9") {
            return false;
        }
    }
    if ( pin.length === 4 || pin.length === 6){
        return true
    } else {
        return false
    }
}

//Better Solution:
function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }

  //Cleaner Solution:
  function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }