'use strict';

module.exports = function (number = 0) {
  var attr = {
    number: number,
    isMoving: false
  };

  var getNumber = function () {
    return attr.number;
  };

  var setNumber = function (val) {
    attr.number = val;
  };

  var isMoving = function () {
    return attr.isMoving;
  };

  var setMoving = function (moving) {
    attr.isMoving = moving;
  };

  var isEmpty = function () {
    return attr.number === 0;
  };

  var setEmpty = function () {
    attr.number = 0;
  };

  return {
    getNumber: getNumber,
    setNumber: setNumber,
    isMoving: isMoving,
    setMoving: setMoving,
    isEmpty: isEmpty,
    setEmpty: setEmpty
  };
};
