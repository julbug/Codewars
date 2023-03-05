// DESCRIPTION:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


//My Solution:
function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
  }

// The problem statement asks us to calculate the sum of the numbers in the nth row of a triangle of consecutive odd numbers. The first row of the triangle has one number, the second row has two numbers, the third row has three numbers, and so on. Each row consists of consecutive odd numbers.

// To solve this problem, we can use a formula that calculates the sum of the numbers in the nth row of the triangle. The formula is:

// sum = n^3

// where n is the row number starting at index 1.

// The JavaScript code uses this formula to calculate the sum of the nth row of the triangle. The code defines a function called sumOfNthRow that takes an integer n as an input. The function returns the sum of the numbers in the nth row of the triangle, which is calculated using the formula n^3.

// The Math.pow() function is used to raise n to the power of 3, which is the sum of the numbers in the nth row of the triangle.

// To use the code, you simply call the sumOfNthRow function with the row number n that you want to calculate the sum for. The function returns the sum of the numbers in that row. For example, if you call sumOfNthRow(1), the function returns 1 because the first row has only one number, which is 1. If you call sumOfNthRow(2), the function returns 8 because the second row has two numbers, which are 3 and 5, and their sum is 8. And so on for other row numbers.