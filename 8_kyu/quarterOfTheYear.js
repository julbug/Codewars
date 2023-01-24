// DESCRIPTION:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

//My Solution:
const quarterOf = (month) => {
  
    const January = 1;
     const February = 2;
      const March = 3;
       const April = 4;
        const May = 5;
        const June = 6;
        const July = 7;
        const August = 8;
        const September = 9;
        const October = 10;
        const November = 11;
        const December = 12;
                                                                      
            if (month === January || month === February || month === March) {
              return 1
            } else if (month === April || month === May || month === June) {
               return 2
            } else if (month === July || month === August || month === September) {
               return 3
            } else {
               return 4
              }
    
  }