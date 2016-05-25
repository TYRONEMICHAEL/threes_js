'use strict';

const _ = require('underscore');
const boardRules = require('./board-rules');

const canMove = function (tile, sibling) {
  return boardRules.canMove({
    siblingTileIsMoving: sibling.isMoving(),
    siblingTileIsEmpty: sibling.isEmpty(),
    siblingIsBlueTile: sibling.isBlueTile(),
    siblingIsRedTile: sibling.isRedTile(),
    tileIsEmpty: tile.isEmpty(),
    tileIsBlueTile: tile.isBlueTile(),
    tileIsRedTile: tile.isRedTile(),
    tilesAreEqual: sibling.getNumber() === tile.getNumber()
  });
};

const moveLeft = function (board) {
  const move = function (row) {
    _.rest(row, 1).forEach((tile, index) => {
      const sibling = row[index];
      if (canMove(tile, sibling)) {
        tile.setMoving();
      }
    });
  };

  board.forEach(move);
};

const moveRight = function (board) {
  const move = function (row) {
    _.chain(row)
      .first(row.length - 1)
      .reverse()
      .each((tile, index) => {
        const sibling = row[(row.length - 1) - index];
        if (canMove(tile, sibling)) {
          tile.setMoving();
        }
    });
  };

  board.forEach(move);
};

const moveUp = function (board) {
  const move = function (row, boardIndex) {
    const siblingRow = board[boardIndex];
    row.forEach(function (tile, rowIndex) {
      const sibling = siblingRow[rowIndex];
      if (canMove(tile, sibling)) {
        tile.setMoving();
      }
    });
  };

  _.rest(board, 1).forEach(move);
};

const moveDown = function (board) {
  const move = function (row, boardIndex) {
    const siblingRow = board[(board.length - 1) - boardIndex];
    row.forEach(function (tile, rowIndex) {
      const sibling = siblingRow[rowIndex];
      if (canMove(tile, sibling)) {
        tile.setMoving();
      }
    });
  };

  _.chain(board)
    .first(board.length - 1)
    .reverse()
    .forEach(move);
};

module.exports = {
  moveLeft,
  moveRight,
  moveUp,
  moveDown
};
