'use strict';

const test = require('ava');
const _ = require('underscore');
const createTile = require('./create-tile');
const moveBoard = require('./move-board');

const getNumberOfMovingTiles = function (updatedBoard) {
  return _.chain(updatedBoard)
    .flatten()
    .filter((tile) => tile.isMoving())
    .value();
};

let board;

test.beforeEach(() => {
  board = [
    [createTile(3), createTile(), createTile(2), createTile(1)],
    [createTile(), createTile(1), createTile(2), createTile()],
    [createTile(2), createTile(1), createTile(2), createTile()],
    [createTile(), createTile(1), createTile(), createTile(2)]
  ];
});

test('update the board when moving left', t => {
  moveBoard.left(board);
  t.true(getNumberOfMovingTiles(board).length === 8);
});

test('update the board when moving right', t => {
  moveBoard.right(board);
  t.true(getNumberOfMovingTiles(board).length === 8);
});

test('update the board when moving up', t => {
  moveBoard.up(board);
  t.true(getNumberOfMovingTiles(board).length === 5);
});

test('update the board when moving down', t => {
  moveBoard.down(board);
  t.true(getNumberOfMovingTiles(board).length === 6);
});
