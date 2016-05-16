'use strict';

const emptyTile = 0;
const blueTile = 1;
const redTile = 2;

module.exports = function (number = emptyTile) {
  let attr = {
    number: number,
    isMoving: false
  };

  let getNumber = function () {
    return attr.number;
  };

  let isBlueTile = function () {
    return getNumber() === blueTile;
  };

  let isRedTile = function () {
    return getNumber() === redTile;
  };

  let isEmpty = function () {
    return attr.number === emptyTile;
  };

  let isMoving = function () {
    return attr.isMoving;
  };

  let setMoving = function (sibling) {
    if (
      sibling.isMoving() ||
      sibling.isEmpty() ||
      sibling.isBlueTile() && isRedTile() ||
      sibling.isRedTile() && isBlueTile() ||
      !isBlueTile() && !isRedTile() && getNumber() === sibling.getNumber()
    ) {
      attr.isMoving = true;
    } else {
      attr.isMoving = false;
    }
  };

  let update = function () {
    if (isMoving()) {
      attr.number = isBlueTile() || isRedTile() ? 3 : attr.number * 2;
      attr.isMoving = false;
    }
  };

  return {
    getNumber,
    isEmpty,
    isRedTile,
    isBlueTile,
    isMoving,
    setMoving,
    update
  };
};
