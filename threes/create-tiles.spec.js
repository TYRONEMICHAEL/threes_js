'use strict';

const test = require('ava');
const createTiles = require('./create-tiles');

test('renders the correct distribution of non empty and empty tiles', t => {
  const tiles = createTiles();

  const filledTiles = tiles.filter((tile) => !tile.isEmpty());
  const emptyTiles = tiles.filter((tile) => tile.isEmpty());

  t.true(tiles.length === 16);
  t.true(filledTiles.length === 9);
  t.true(emptyTiles.length === 7);
});
