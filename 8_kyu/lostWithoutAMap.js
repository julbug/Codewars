// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//My Solution:
function maps(x){
    let doubledArray = [];
     for (let i = 0; i < x.length; i++) {
       doubledArray.push(x[i] * 2);
     }
     return doubledArray;
   }
//    First, we create a new array called doubledArray before the loop starts. Inside the loop, we use the push() method to add the doubled value of each element to this new array.

//    Once the loop is finished, we use the return statement to return the new doubledArray that contains all the doubled values of the original input array.


   //Cleaner Solution:
   function maps(x){
    return x.map(n => n * 2);
  }