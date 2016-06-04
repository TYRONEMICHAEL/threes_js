'use strict';

const createTiles = require('./create-tiles');
const linkTiles = require('./link-tiles');
const createGrid = require('./create-grid');
const moveTiles = require('./move-tiles');
const updateTiles = require('./update-tiles');

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

  const move = function () {
    moveTiles.down(tiles);
    updateTiles.down(tiles);
  };

  generate();

  return {
    generate,
    render,
    move
  };
};