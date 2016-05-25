'use strict';

const _ = require('underscore');

let canMove = function (tileRules) {
  const rules = _.extend({
    siblingTileIsMoving: false,
    siblingTileIsEmpty: false,
    siblingIsBlueTile: false,
    siblingIsRedTile: false,
    tileIsEmpty: false,
    tileIsBlueTile: false,
    tileIsRedTile: false,
    tilesAreEqual: false
  }, tileRules);

  if (
    rules.siblingTileIsMoving && !rules.tileIsEmpty ||
    rules.siblingTileIsEmpty && !rules.tileIsEmpty ||
    rules.siblingIsBlueTile && rules.tileIsRedTile ||
    rules.siblingIsRedTile && rules.tileIsBlueTile ||
    rules.tilesAreEqual && !(rules.tileIsRedTile || rules.tileIsBlueTile || rules.tileIsEmpty)
  ) {
    return true;
  }

  return false;
};

module.exports = {
  canMove
};
