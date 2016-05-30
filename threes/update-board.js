'use strict';

const _ = require('underscore');
const createTile = require('./create-tile');

const left = function (board) {
  const update = function (row) {
    _.rest(row, 1).forEach(function (tile, rowIndex) {
      const sibling = row[rowIndex];

      if (tile.isMoving()) {
        row[rowIndex + 1] = sibling;
        row[rowIndex] = tile;

        tile.setMoving(false);

        if (!sibling.isEmpty()) {
          tile.update();
          row[rowIndex + 1] = createTile();
        }
      }
    });
  };

  board.forEach(update);
};

const right = function (board) {
  const update = function (row) {
    _.first(row, row.length - 1)
      .reverse()
      .forEach(function (tile, rowIndex) {
        const sibling = row[(row.length - 1) - rowIndex];

        if (tile.isMoving()) {
          row[(row.length - 2) - rowIndex] = sibling;
          row[(row.length - 1) - rowIndex] = tile;

          tile.setMoving(false);

          if (!sibling.isEmpty()) {
            tile.update();
            row[(row.length - 2) - rowIndex] = createTile();
          }
      }
    });
  };

  board.forEach(update);
};

const up = function (board) {
  const update = function (row, boardIndex) {
    row.forEach(function (tile, rowIndex) {
      const sibling = board[boardIndex][rowIndex];

      if (tile.isMoving()) {
        board[boardIndex + 1][rowIndex] = sibling;
        board[boardIndex][rowIndex] = tile;

        tile.setMoving(false);

        if (!sibling.isEmpty()) {
          tile.update();
          board[boardIndex][rowIndex] = createTile();
        }
      }
    });
  };

  _.rest(board, 1).forEach(update);
};

const down = function (board) {
  const update = function (row, boardIndex) {
    row.forEach(function (tile, rowIndex) {
      const sibling = board[boardIndex][rowIndex];

      if (tile.isMoving()) {
        board[boardIndex + 1][rowIndex] = sibling;
        board[boardIndex][rowIndex] = tile;

        tile.setMoving(false);

        if (!sibling.isEmpty()) {
          tile.update();
          board[boardIndex][rowIndex] = createTile();
        }
      }
    });
  };

  _.rest(board, 1).forEach(update);
};

module.exports = {
  left,
  right,
  up,
  down
};
