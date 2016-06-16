'use strict';

const createTiles = require('./create-tiles');
const linkTiles = require('./link-tiles');
const createGrid = require('./create-grid');
const moveTiles = require('./move-tiles');
const updateTiles = require('./update-tiles');
const getNewTile = require('./get-new-tile');
const generateNumber = require('./generate-number');

module.exports = () => {
  let tiles = [];

  const generate = function () {
    tiles = createTiles();
    linkTiles(tiles);
    return this;
  };

  const render = function () {
    return createGrid(tiles);
  };

  const move = function (direction) {
    let newTile;
    moveTiles[direction](tiles);
    newTile = getNewTile[direction](tiles);
    updateTiles[direction](tiles);
    newTile.setNumber(generateNumber(tiles));
  };

  generate();

  return {
    generate,
    render,
    move
  };
};
