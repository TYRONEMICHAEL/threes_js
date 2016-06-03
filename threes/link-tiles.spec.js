'use strict';

const test = require('ava');
const createTile = require('./create-tile');
const linkTiles = require('./link-tiles');

const tiles = [
  createTile(3), createTile(), createTile(2), createTile(1),
  createTile(), createTile(1), createTile(2), createTile(),
  createTile(2), createTile(1), createTile(2), createTile(),
  createTile(), createTile(1), createTile(), createTile(2)
];

linkTiles(tiles);

test('right column tiles have no pointers to a next tile', t => {
  const rightColumnTiles = tiles.filter((tile) => !tile.getRightTile());

  t.true(!tiles[3].getRightTile());
  t.true(!tiles[7].getRightTile());
  t.true(!tiles[11].getRightTile());
  t.true(!tiles[15].getRightTile());

  t.true(rightColumnTiles.length === 4);
});

test('left column tiles have no pointers to a previous tile', t => {
  const leftColumnTiles = tiles.filter((tile) => !tile.getLeftTile());

  t.true(!tiles[0].getLeftTile());
  t.true(!tiles[4].getLeftTile());
  t.true(!tiles[8].getLeftTile());
  t.true(!tiles[12].getLeftTile());

  t.true(leftColumnTiles.length === 4);
});

test('top column tiles have no pointers to a top tile', t => {
  const topColumnTiles = tiles.filter((tile) => !tile.getTopTile());

  t.true(!tiles[0].getTopTile());
  t.true(!tiles[1].getTopTile());
  t.true(!tiles[2].getTopTile());
  t.true(!tiles[3].getTopTile());

  t.true(topColumnTiles.length === 4);
});

test('bottom column tiles have no pointers to a bottom tile', t => {
  const bottomColumnTiles = tiles.filter((tile) => !tile.getBottomTile());

  t.true(!tiles[12].getBottomTile());
  t.true(!tiles[13].getBottomTile());
  t.true(!tiles[14].getBottomTile());
  t.true(!tiles[15].getBottomTile());

  t.true(bottomColumnTiles.length === 4);
});
