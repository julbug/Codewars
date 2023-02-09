DESCRIPTION:


//My Solution:
function digitalRoot(n) {
    let total = 0;
    while (n > 0) {
      total += n % 10;
      n = Math.floor(n / 10);
    }
    if (total.toString().length === 1) {
      return total;
    } else {
      return digitalRoot(total);
    }
  }

  //This code creates a function called digitalRoot which takes in a non-negative integer as an argument (n). It then creates a variable called total which is set to 0. The code then enters a while loop which will run as long as n is greater than 0. The code then takes the remainder of n divided by 10 and adds that to the total. It then sets n to the floor of n divided by 10. After the while loop ends, the code checks to see if the total is a single-digit number. If it is, then the total is returned. If not, the code calls the digitalRoot function again, this time passing in total as the argument.

  //**The code takes the remainder of n divided by 10 because it will give us the right-most digit of a number. For example, if n is 132189, then when we take the remainder of 132189 divided by 10 we get 9. This is the right-most digit in the number. We can use this to add each digit of the number to the total in our function. 

  //Cleaner Code:
  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

  //This code creates a function called digital_root which takes in a non-negative integer as an argument (n). It then returns the result of (n - 1) % 9 + 1. This will return the digital root of the number n. The digital root is determined by subtracting 1 from the number, taking the remainder of that number divided by 9, and finally adding 1 back to the result.