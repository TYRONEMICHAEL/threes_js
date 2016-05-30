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

  const setEmpty = function () {
    attr.number = emptyTile;
  };

  const isMoving = function () {
    return attr.isMoving;
  };

  const setMoving = function (moving = true) {
    attr.isMoving = moving;
  };

  const getNext = function () {
    return attr.next;
  };

  const setNext = function (tile) {
    attr.next = tile;
  };

  const getPrev = function () {
    return attr.prev;
  };

  const setPrev = function (tile) {
    attr.prev = tile;
  };

  const getTop = function () {
    return attr.top;
  };

  const setTop = function (tile) {
    attr.top = tile;
  };

  const getBottom = function () {
    return attr.bottom;
  };

  const setBottom = function (tile) {
    attr.bottom = tile;
  };

  const update = function () {
    attr.number = isBlueTile() || isRedTile() ? 3 : attr.number * 2;
  };

  return {
    getNumber,
    isEmpty,
    setEmpty,
    isRedTile,
    isBlueTile,
    isMoving,
    setMoving,
    getNext,
    setNext,
    getPrev,
    setPrev,
    getTop,
    setTop,
    getBottom,
    setBottom,
    update
  };
};
