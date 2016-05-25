'use strict';

const emptyTile = 0;
const blueTile = 1;
const redTile = 2;

module.exports = function (number = emptyTile) {
  const attr = {
    number: number,
    isMoving: false
  };

  const getNumber = function () {
    return attr.number;
  };

  const isBlueTile = function () {
    return getNumber() === blueTile;
  };

  const isRedTile = function () {
    return getNumber() === redTile;
  };

  const isEmpty = function () {
    return attr.number === emptyTile;
  };

  const isMoving = function () {
    return attr.isMoving;
  };

  const setMoving = function () {
    attr.isMoving = true;
  };

  const upgrade = function () {
    attr.number = isBlueTile() || isRedTile() ? 3 : attr.number * 2;
    attr.isMoving = false;
  };

  return {
    getNumber,
    isEmpty,
    isRedTile,
    isBlueTile,
    isMoving,
    setMoving,
    upgrade
  };
};
