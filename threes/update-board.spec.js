'use strict';

const test = require('ava');
const _ = require('underscore');
const createTile = require('./create-tile');
const updateBoard = require('./update-board');

test('update the board when moving left', t => {
  let board = [[createTile(3), createTile(), createTile(2), createTile(1)]];
  console.log(board[0][3].isMoving());
  let updatedBoard = updateBoard.move(board, 'left');
  console.log(board[0][3].isMoving(), updatedBoard[0][3].isMoving());
});
