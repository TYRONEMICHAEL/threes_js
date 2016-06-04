'use strict';

const _ = require('underscore');
const boardRules = require('./board-rules');

const canMove = (tile, sibling) => {
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

const setMoving = function (tile, sibling) {
  if (canMove(tile, sibling)) {
    tile.setMoving();
  }
};

const moveTiles = function (tiles, fn) {
  _.chain(tiles)
    .filter((tile) => tile[fn]())
    .each((tile) => setMoving(tile, tile[fn]()));

  return tiles;
};

const moveTilesReverse = function (tiles, fn) {
  _.chain(tiles.reverse())
    .filter((tile) => tile[fn]())
    .each((tile) => setMoving(tile, tile[fn]()));

  return tiles.reverse();
};

module.exports = {
  left: (tiles) => moveTiles(tiles, 'getLeftTile'),
  right: (tiles) => moveTilesReverse(tiles, 'getRightTile'),
  up: (tiles) => moveTiles(tiles, 'getTopTile'),
  down: (tiles) => moveTilesReverse(tiles, 'getBottomTile')
};
