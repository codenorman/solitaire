var _ = require('lodash');
var card = require('./card');
var cards = require('./cards');
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

//var deck = genDeck(config.pack)
//console.log(deck);
