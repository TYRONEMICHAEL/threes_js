'use strict';

const createTile = require('./create-tile');
const createTiles = require('./create-tiles');
const linkTiles = require('./link-tiles');
const createGrid = require('./create-grid');
const moveTiles = require('./move-tiles');
const updateTiles = require('./update-tiles');
const getNewTile = require('./get-new-tile');
const generateNumber = require('./generate-number');

module.exports = () => {
  let tiles = [];
  let newTile;
  let nextTile;

  const generate = function () {
    tiles = createTiles();
    linkTiles(tiles);
    return this;
  };

  const render = function () {
    return createGrid(tiles);
  };

  const move = function (direction) {
    moveTiles[direction](tiles);
    newTile = getNewTile[direction](tiles);
  };

  const update = function (direction) {
    updateTiles[direction](tiles);
    newTile.setNew();
    newTile.setNumber(nextTile.getNumber());
    nextTile.setNumber(generateNumber(tiles));
  };

  const getNextTile = function () {
    return nextTile;
  };

  generate();
  nextTile = createTile(generateNumber(tiles));

  return {
    generate,
    render,
    move,
    update,
    getNextTile
  };
};
