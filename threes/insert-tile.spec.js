'use strict';

const test = require('ava');
const createTile = require('./create-tile');
const linkTiles = require('./link-tiles');
const moveTiles = require('./move-tiles');
const insertRandomTile = require('./insert-tile');

let tiles;

test.beforeEach(() => {
  tiles = [
    createTile(3), createTile(), createTile(2), createTile(1),
    createTile(), createTile(1), createTile(2), createTile(),
    createTile(2), createTile(1), createTile(2), createTile(),
    createTile(), createTile(1), createTile(), createTile(2)
  ];

  linkTiles(tiles);
});

test.skip('links a random tile to a tile in the right column', t => {
  let randomTile;

  moveTiles.left(tiles);
  randomTile = tiles.find((tile) => !tile.getRightTile() && tile.getRandomTile());
  t.true(randomTile === null);
  insertRandomTile.right(tiles);
  randomTile = tiles.find((tile) => !tile.getRightTile() && tile.getRandomTile());
  t.true(randomTile !== null);
});
