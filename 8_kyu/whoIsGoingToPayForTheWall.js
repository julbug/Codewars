// DESCRIPTION:
// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"




//My Solution:
function whoIsPaying(name){
    if (name.length <= 2) {
      return [name]; // Return the name as is if it has 2 or fewer characters
    } else {
      var truncatedName = name.substring(0, 2); // Truncate the name to the first two characters
      return [name, truncatedName]; // Return both the full name and the truncated version as an array
    }
  }
  

  //Cleaner Solution:
  function whoIsPaying(name){
    return (name.length>2)?([name, name.substr(0,2)]):[name];
  }