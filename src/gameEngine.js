var _ = require('lodash');

module.exports = {
  genDeck: function (pack) {
    return _.reduce(pack, function (a, b) {
      return _.flatten(_.map(a, function (x) {
        return _.map(b, function (y) {
          return x.concat(y);
        })
      }))
    })
  }
};

