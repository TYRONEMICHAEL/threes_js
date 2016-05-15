'use strict';

const test = require('ava');
const _ = require('underscore');
const createBoard = require('./create-board');

test('render the 4x4 array correctly', t => {
  let board = createBoard();

  let filterTiles = (fn) => {
    return _.chain(board)
      .flatten()
      .filter(fn)
      .value();
  };

  let filledTiles = filterTiles((tile) => !tile.isEmpty());
  let emptyTiles = filterTiles((tile) => tile.isEmpty());

  t.true(board.length === 4);
  t.true(filledTiles.length === 9);
  t.true(emptyTiles.length === 7);
});
