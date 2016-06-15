'use strict';

const _ = require('underscore');

const getTileIndex = function (tiles, fn) {
  const potentialColumns = [];

  tiles.forEach((tile, index) => {
    let nextTile = tile[fn]();
    let isMoving = tile.isMoving();
    while (nextTile && !isMoving) {
      nextTile = nextTile[fn]();
      isMoving = nextTile && nextTile.isMoving();
    }
    if (isMoving) {
      potentialColumns.push(index);
    }
  });

  return _.sample(potentialColumns);
};

const left = function (tiles) {
  const rightColumnTiles = tiles.filter((tile) => !tile.getRightTile());
  const index = getTileIndex(rightColumnTiles, 'getLeftTile');
  return rightColumnTiles[index];
};

const right = function (tiles) {
  const leftColumnTiles = tiles.filter((tile) => !tile.getLeftTile());
  const index = getTileIndex(leftColumnTiles, 'getRightTile');
  return leftColumnTiles[index];
};

const up = function (tiles) {
  const topColumnTiles = tiles.filter((tile) => !tile.getBottomTile());
  const index = getTileIndex(topColumnTiles, 'getTopTile');
  return topColumnTiles[index];
};

const down = function (tiles) {
  const bottomColumnTiles = tiles.filter((tile) => !tile.getTopTile());
  const index = getTileIndex(bottomColumnTiles, 'getBottomTile');
  return bottomColumnTiles[index];
};

module.exports = {
  left,
  right,
  up,
  down
};
