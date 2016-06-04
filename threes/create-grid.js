'use strict';

const _ = require('underscore');

module.exports = (tiles) => {
  const createRow = function (i, t) {
    return _.range(4)
      .map((column) => t[column + (i * 4)]);
  };

  const grid = _.range(4)
    .map((rowIndex) => createRow(rowIndex, tiles));

  return grid;
};
