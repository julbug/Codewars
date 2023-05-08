// DESCRIPTION:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'



//My Solution:
function switcheroo(x){
    let result = '';
    for (let i = 0; i < x.length; i++) {
      if (x[i] === 'a') {
        result += 'b';
      } else if (x[i] === 'b') {
        result += 'a';
      } else {
        result += x[i];
      }
    }
    return result;
  }
  


  //Cleaner Solution:
  const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")