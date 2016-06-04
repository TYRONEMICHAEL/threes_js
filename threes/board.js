'use strict';

const createTiles = require('./create-tiles');
const linkTiles = require('./link-tiles');
const createGrid = require('./create-grid');

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

  generate();

  return {
    generate,
    render
  };
};
