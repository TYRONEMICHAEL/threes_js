'use strict';

const test = require('ava');
const _ = require('underscore');
const createTile = require('./create-tile');
const updateBoard = require('./update-board');

test('update the board when moving left', t => {
  let board = [[createTile(3), createTile(), createTile(2), createTile(1)]];
  let updatedBoard = updateBoard.move(board, 'left');
});
