'use strict';

const test = require('ava');
const createTile = require('./create-tile');
const moveTiles = require('./move-tiles');
const linkTiles = require('./link-tiles');

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

test('update the tiles when moving left', t => {
  t.true(moveTiles.left(tiles).filter((tile) => tile.isMoving()).length === 8);
});

test('update the tiles when moving right', t => {
  t.true(moveTiles.right(tiles).filter((tile) => tile.isMoving()).length === 8);
});

test('update the tiles when moving up', t => {
  t.true(moveTiles.up(tiles).filter((tile) => tile.isMoving()).length === 5);
});

test('update the tiles when moving down', t => {
  t.true(moveTiles.down(tiles).filter((tile) => tile.isMoving()).length === 6);
});
