'use strict';

const emptyTile = 0;
const blueTile = 1;
const redTile = 2;

module.exports = (number = emptyTile) => {
  const attr = {
    number: number,
    isMoving: false
  };

  const getNumber = function () {
    return attr.number;
  };

  const setNumber = function (num) {
    attr.number = num;
    return this;
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

  const setEmpty = function () {
    attr.number = emptyTile;
    return this;
  };

  const isMoving = function () {
    return attr.isMoving;
  };

  const setMoving = (moving = true) => {
    attr.isMoving = moving;
    return this;
  };

  const getRightTile = function () {
    return attr.next;
  };

  const setRightTile = function (tile) {
    attr.next = tile;
    return this;
  };

  const getLeftTile = function () {
    return attr.prev;
  };

  const setLeftTile = (tile) => {
    attr.prev = tile;
    return this;
  };

  const getTopTile = function () {
    return attr.top;
  };

  const setTopTile = function (tile) {
    attr.top = tile;
    return this;
  };

  const getBottomTile = function () {
    return attr.bottom;
  };

  const setBottomTile = function (tile) {
    attr.bottom = tile;
    return this;
  };

  const isNew = function () {
    return attr.isNew;
  };

  const setNew = function (isNewTile = true) {
    attr.isNew = isNewTile;
    return this;
  };

  const update = function () {
    attr.number = isBlueTile() || isRedTile() ? 3 : attr.number * 2;
    return this;
  };

  return {
    getNumber,
    setNumber,
    isEmpty,
    setEmpty,
    isNew,
    setNew,
    isMoving,
    setMoving,
    isRedTile,
    isBlueTile,
    getRightTile,
    setRightTile,
    getLeftTile,
    setLeftTile,
    getTopTile,
    setTopTile,
    getBottomTile,
    setBottomTile,
    update
  };
};
