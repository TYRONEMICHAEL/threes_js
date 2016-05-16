'use strict';

const _ = require('underscore');
const createTile = require('./create-tile');
const deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];

module.exports = function createBoard () {
  let emptyTiles = _.range(7)
    .map(() => createTile());

  let filledTiles = _.chain(deck)
    .shuffle(deck)
    .take(9)
    .map(createTile)
    .value();

  let tiles = _.shuffle(emptyTiles.concat(filledTiles));

  let createRow = function (rowIndex) {
    return _.range(4)
      .map((column) => tiles[column + (rowIndex * 4)]);
  };

  let board = _.range(4)
    .map(createRow);

  return board;
};
