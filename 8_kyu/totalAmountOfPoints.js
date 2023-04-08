// DESCRIPTION:
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


//My Solution:
function points(games) {
    let points = 0;
  for (let i = 0; i < games.length; i++) {
    const [x, y] = games[i].split(":");
    if (x > y) {
      points += 3;
    } else if (x === y) {
      points += 1;
    }
  }
  return points;
}



// 1. Define a function called calculatePoints that takes an array of match results as its input.

// 2. Initialize a variable called points to 0. This variable will keep track of the total number of points earned by your team.

// 3. Start a for loop that iterates over each match result in the input array. The loop variable i starts at 0 and goes up to the length of the array.

// 4. Inside the loop, extract the x and y scores for the current match result by splitting the string using the split() method. The split() method splits a string into an array of substrings based on a separator, which in this case is the colon :.

// 5. Check the conditions to determine how many points your team earned for the current match:

// a. If your team won (x > y), add 3 points to the points variable using the += shorthand notation. The += operator adds the value on the right-hand side to the variable on the left-hand side and assigns the result back to the variable.

// b. If the match was a tie (x === y), add 1 point to the points variable.

// c. If your team lost (x < y), don't add any points.

// 6. After the loop finishes, return the points variable, which now contains the total number of points earned by your team in the championship.