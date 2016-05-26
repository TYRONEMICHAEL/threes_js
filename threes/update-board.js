'use strict';

const createTile = require('./create-tile');

const left = function (board) {
  const update = function (row, boardIndex) {
    row.forEach(function (tile, rowIndex) {
      const sibling = row[rowIndex - 1];
      if (tile.isMoving()) {
        board[boardIndex][rowIndex - 1] = tile;
        board[boardIndex][rowIndex] = sibling;
        if (!sibling.isEmpty()) {
          tile.update();
          board[boardIndex][rowIndex] = createTile();
        }
      }
    });
  };

  board.forEach(update);
};

module.exports = {
  left
};
