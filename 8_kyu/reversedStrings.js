// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//My Solution:
function solution(str){
    
    var splitString = str.split("")
 
    var reverseArray = splitString.reverse(); 
    
    var joinArray = reverseArray.join(""); 
  
    return joinArray; 
}