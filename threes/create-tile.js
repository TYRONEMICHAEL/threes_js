'use strict';

const emptyTile = 0;
const blueTile = 1;
const redTile = 2;

module.exports = (number = emptyTile) => {
  const attr = {
    number: number,
    isMoving: false
  };

  const getNumber = () => {
    return attr.number;
  };

  const isBlueTile = () => {
    return getNumber() === blueTile;
  };

  const isRedTile = () => {
    return getNumber() === redTile;
  };

  const isEmpty = () => {
    return attr.number === emptyTile;
  };

  const setEmpty = () => {
    attr.number = emptyTile;
    return this;
  };

  const isMoving = () => {
    return attr.isMoving;
  };

  const setMoving = (moving = true) => {
    attr.isMoving = moving;
    return this;
  };

  const getRightTile = () => {
    return attr.next;
  };

  const setRightTile = (tile) => {
    attr.next = tile;
    return this;
  };

  const getLeftTile = () => {
    return attr.prev;
  };

  const setLeftTile = (tile) => {
    attr.prev = tile;
    return this;
  };

  const getTopTile = () => {
    return attr.top;
  };

  const setTopTile = (tile) => {
    attr.top = tile;
    return this;
  };

  const getBottomTile = () => {
    return attr.bottom;
  };

  const setBottomTile = (tile) => {
    attr.bottom = tile;
    return this;
  };

  const update = (value) => {
    if (isEmpty()) {
      attr.number = value;
    } else {
      attr.number = isBlueTile() || isRedTile() ? 3 : attr.number * 2;
    }
    return this;
  };

  return {
    getNumber,
    isEmpty,
    setEmpty,
    isRedTile,
    isBlueTile,
    isMoving,
    setMoving,
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
