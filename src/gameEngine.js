var _ = require('lodash');
var config = require('./games/klondike.json');

var genDeck = function (pack) {
  return _.reduce(pack, function (a, b) {
    return _.flatten(_.map(a, function (x) {
      return _.map(b, function (y) {
        return x.concat(y);
      })
    }))
  })
};
var deck = genDeck(config.pack)
console.log(deck);
