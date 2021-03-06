'use strict';

const _ = require('underscore');

const makeUpdate = (tile, sibling) => {
  if (sibling.isEmpty()) {
    sibling.setNumber(tile.getNumber());
  } else {
    sibling.update();
  }
  tile.setEmpty();
  tile.setMoving(false);
};

const updateTiles = function (tiles, fn) {
  _.filter(tiles, (tile) => tile.isMoving())
    .forEach((tile) => makeUpdate(tile, tile[fn]()));
  return tiles;
};

const updateTilesInReverse = function (tiles, fn) {
  _.filter(tiles.reverse(), (tile) => tile.isMoving())
    .forEach((tile) => makeUpdate(tile, tile[fn]()));
  return tiles.reverse();
};

module.exports = {
  left: (tiles) => updateTiles(tiles, 'getLeftTile'),
  right: (tiles) => updateTilesInReverse(tiles, 'getRightTile'),
  up: (tiles) => updateTiles(tiles, 'getTopTile'),
  down: (tiles) => updateTilesInReverse(tiles, 'getBottomTile')
};
