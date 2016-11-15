var _ = require('lodash');
var card = require('card');
var cards = require('cards');
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

var setUp = function(){

};

var start = function(){

};

var isValidMove = function (currentState, newState) {

};

var isGameWon = function (boardState) {

};

console.log(genDeck(config.pack));

console.log(isBlack('4c'))
console.log(isBlack('3d'))
console.log(isBlack('ah'))
console.log(isBlack('5s'))
