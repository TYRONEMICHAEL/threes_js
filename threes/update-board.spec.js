'use strict';

const test = require('ava');
const _ = require('underscore');
const createTile = require('./create-tile');
const moveBoard = require('./move-board');
const updateBoard = require('./update-board');

let board;

test.beforeEach(() => {
  board = [
    [createTile(3), createTile(), createTile(2), createTile(1)],
    [createTile(), createTile(1), createTile(2), createTile()],
    [createTile(2), createTile(1), createTile(2), createTile()],
    [createTile(), createTile(1), createTile(), createTile(2)]
  ];
});

test('update board when moving left', t => {
  moveBoard.left(board);
  updateBoard.left(board);

  const updatedBoard = _.flatten(board).map(function (tile) {
    return tile.getNumber();
  });

  t.deepEqual(
    [3, 2, 1, 0, 1, 2, 0, 0, 3, 2, 0, 0, 1, 0, 2, 0],
    updatedBoard
  );
});
