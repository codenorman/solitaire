module.exports = {
  isBlack: function (card) {
    return card[1] === 'c' || card[1] === 's';
  },
  isRed: function (card) {
    return !isBlack(card);
  },
  isHeart: function () {
  },
  isSpade: function () {
  },
  isClub: function () {
  },
  isDiamond: function () {
  },
}
