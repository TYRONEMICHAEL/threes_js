'use strict';

const _ = require('underscore');
const createTile = require('./create-tile');

const left = function (board) {
  const update = function (row) {
    row.forEach(function (tile, rowIndex) {
      const sibling = row[rowIndex - 1];
      if (tile.isMoving()) {
        row[rowIndex - 1] = tile;
        row[rowIndex] = sibling;
        tile.setMoving(false);

        if (!sibling.isEmpty()) {
          tile.update();
          row[rowIndex] = createTile();
        }
      }
    });
  };

  board.forEach(update);
};

const right = function (board) {
  const update = function (row, boardIndex) {
      row
      .reverse()
      .forEach(function (sibling, rowIndex) {
        const tile = row[rowIndex + 1];
        if (tile && tile.isMoving()) {
          row[rowIndex + 1] = sibling;
          row[rowIndex] = tile;
          tile.setMoving(false);

          if (!sibling.isEmpty()) {
            tile.update();
            row[rowIndex + 1] = createTile();
          }
        }
    });

    board[boardIndex] = _.chain(row).reverse().value();
  };

  board.forEach(update);
};

module.exports = {
  left,
  right
};
