// DESCRIPTION:
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


//My Solution:
function defineSuit(card) {
    const suit = card.charAt(card.length - 1);
   switch (suit) {
        case '♣':
         return "clubs";
          break;
        case '♦':
           return "diamonds";
          break;
        case '♥':
           return "hearts";
          break;
        case '♠':
          return "spades";
          break;
             default:
          return "0";
      }
  }