'use strict';

const _ = require('underscore');
const deck = require('./deck');

const minTileNumber = 48;
const minRandomPercentile = 0.05;

// Shamelessly borrowed from
// => https://github.com/angelali/threesjs/blob/master/client/js/util.js

module.exports = function (tiles, randomPercentTile = minRandomPercentile) {
  const maxNum = _.chain(tiles).map((tile) => tile.getNumber()).max().value();
  if (maxNum >= minTileNumber && (Math.random() <= randomPercentTile)) {
    const size = (Math.log(maxNum / 3) / Math.log(2)) - 3;
    const bonus_deck = _.times(size, function (n) {
      return 6 * Math.pow(2, n);
    });
    return _.sample(bonus_deck);
  } else {
    return _.sample(deck);
  }
};
