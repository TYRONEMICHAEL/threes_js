'use strict';

const test = require('ava');
const createTile = require('./create-tile');
const moveTiles = require('./move-tiles');
const linkTiles = require('./link-tiles');
const updateTiles = require('./update-tiles');

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

test('update tiles when moving left', t => {
  moveTiles.left(tiles);
  updateTiles.left(tiles);

  t.deepEqual(
    [
      3, 2, 1, 0,
      1, 2, 0, 0,
      3, 2, 0, 0,
      1, 0, 2, 0
    ],
    tiles.map((tile) => tile.getNumber())
  );
});

test('update tiles when moving right', t => {
  moveTiles.right(tiles);
  updateTiles.right(tiles);

  t.deepEqual(
    [
      0, 3, 0, 3,
      0, 0, 1, 2,
      0, 2, 1, 2,
      0, 0, 1, 2
    ],
    tiles.map((tile) => tile.getNumber())
  );
});

test('update tiles when moving up', t => {
  moveTiles.up(tiles);
  updateTiles.up(tiles);

  t.deepEqual(
    [
      3, 1, 2, 1,
      2, 1, 2, 0,
      0, 1, 2, 2,
      0, 0, 0, 0
    ],
    tiles.map((tile) => tile.getNumber())
  );
});

test('update tiles when moving down', t => {
  moveTiles.down(tiles);
  updateTiles.down(tiles);

  t.deepEqual(
    [
      0, 0, 0, 0,
      3, 1, 2, 1,
      0, 1, 2, 0,
      2, 1, 2, 2
    ],
    tiles.map((tile) => tile.getNumber())
  );
});
