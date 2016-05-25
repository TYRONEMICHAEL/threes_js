'use strict';

const test = require('ava');
const createTile = require('./create-tile');

test('tile has the correct properties', t => {
  const tile = createTile(2);
  t.true(tile.getNumber() === 2);
  t.true(tile.isRedTile());
  t.true(!tile.isMoving());
  t.true(!tile.isEmpty());
  t.true(!tile.isBlueTile());
});

test('sets tile to moving', t => {
  const tile = createTile(2);
  tile.setMoving();
  t.true(tile.isMoving());
});

test('upgrades a normal tile with the correct value', t => {
  const tile = createTile(3);
  tile.upgrade();
  t.true(tile.getNumber() === 6);
});

test('upgrades a blue tile with the correct value', t => {
  const tile = createTile(1);
  tile.upgrade();
  t.true(tile.getNumber() === 3);
});

test('upgrades a red tile with the correct value', t => {
  const tile = createTile(2);
  tile.upgrade();
  t.true(tile.getNumber() === 3);
});
