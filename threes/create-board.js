'use strict';

const _ = require('underscore');
const createTile = require('./create-tile');
const deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];

module.exports = function createBoard () {
  const emptyTiles = _.range(7)
    .map(() => createTile());

  const filledTiles = _.chain(deck)
    .shuffle(deck)
    .take(9)
    .map(createTile)
    .value();

  const tiles = _.shuffle(emptyTiles.concat(filledTiles));

  const createRow = function (rowIndex) {
    return _.range(4)
      .map((column) => tiles[column + (rowIndex * 4)]);
  };

  const board = _.range(4)
    .map(createRow);

  return board;
};
