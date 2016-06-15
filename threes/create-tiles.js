'use strict';

const _ = require('underscore');
const createTile = require('./create-tile');
const deck = require('./deck');

module.exports = () => {
  const emptyTiles = _.range(7)
    .map(() => createTile());

  const filledTiles = _.chain(deck)
    .shuffle(deck)
    .take(9)
    .map(createTile)
    .value();

  const tiles = _.shuffle(emptyTiles.concat(filledTiles));

  return tiles;
};
