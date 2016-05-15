'use strict';

const test = require('ava');
let createTile = require('./tile');
let tile;

test.beforeEach(() => {
  tile = createTile(2);
});

test('tile has the correct properties', t => {
  t.true(tile.getNumber() === 2);
  t.true(!tile.isMoving());
  t.true(!tile.isEmpty());
});

test('sets a new properties on the tile model', t => {
  tile.setNumber(3);
  t.true(tile.getNumber() === 3);
  tile.setMoving(true);
  t.true(tile.isMoving());
  tile.setEmpty();
  t.true(tile.isEmpty());
});
