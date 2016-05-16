'use strict';

const _ = require('underscore');

let move = function (currentBoard) {
  let board = _.extend([], currentBoard);
  let setMoving = function (row) {
    _.rest(row, 1).forEach((tile, index) => {
      let sibling = row[index];
      tile.setMoving(sibling);
    });
  };

  board.forEach(setMoving);
  return board;
};

module.exports = {
  move
};
