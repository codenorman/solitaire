module.exports = {
  isBlack: function (card) {
    return card[1] === 'c' || card[1] === 's';
  },
  isRed: function (card) {
    return !isBlack(card);
  },
  isHeart: function (card) {
    return card[1] === 'h';
  },
  isSpade: function (card) {
   return card[1] === 's';
  },
  isClub: function (card) {
    return card[1] === 'c';
  },
  isDiamond: function (card) {
    return card[1] === 'd';
  },
 // isFace: function (card){
 //  return card[0] === 'j' || card[0] === 'q' || card[0] === 'k' || card[0] === 'a';
  }
}
