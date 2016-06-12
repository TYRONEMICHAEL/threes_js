'use strict';

const test = require('ava');
const createTile = require('./create-tile');
const linkTiles = require('./link-tiles');
const moveTiles = require('./move-tiles');
const getNewTile = require('./get-new-tile');

let tiles;

test.beforeEach(() => {
  tiles = [
    createTile(3), createTile(), createTile(2), createTile(1),
    createTile(), createTile(1), createTile(2), createTile(),
    createTile(2), createTile(2), createTile(2), createTile(),
    createTile(), createTile(1), createTile(), createTile(2)
  ];

  linkTiles(tiles);
});

test('gets the correct tile when moving left', t => {
  let newTile;
  moveTiles.left(tiles);
  newTile = getNewTile.left(tiles);
  t.true(newTile !== null);
  t.true(newTile.getRightTile() === null);
});

test('gets the correct tile when moving right', t => {
  let newTile;
  moveTiles.right(tiles);
  newTile = getNewTile.right(tiles);
  t.true(newTile !== null);
  t.true(newTile.getLeftTile() === null);
});

test('gets the correct tile when moving up', t => {
  let newTile;
  moveTiles.up(tiles);
  newTile = getNewTile.up(tiles);
  t.true(newTile !== null);
  t.true(newTile.getBottomTile() === null);
});

test('gets the correct tile when moving down', t => {
  let newTile;
  moveTiles.down(tiles);
  newTile = getNewTile.down(tiles);
  t.true(newTile !== null);
  t.true(newTile.getTopTile() === null);
});
