'use strict';

const test = require('ava');
const createTile = require('./create-tile');

test('tile has the correct properties', t => {
  let tile = createTile(2);
  t.true(tile.getNumber() === 2);
  t.true(!tile.isMoving());
  t.true(!tile.isEmpty());
  t.true(tile.isRedTile());
  t.true(!tile.isBlueTile());
});

test('cannot setMoving when sibling is a blue tile and tile is a blue tile', t => {
  let tile = createTile(1);
  let sibling = createTile(1);
  tile.setMoving(sibling);
  t.true(!tile.isMoving());
});

test('cannot setMoving when sibling is a red tile and tile is a red tile', t => {
  let tile = createTile(2);
  let sibling = createTile(2);
  tile.setMoving(sibling);
  t.true(!tile.isMoving());
});

test('cannot setMoving when sibling is a regular tile and tile is a red tile', t => {
  let tile = createTile(3);
  let sibling = createTile(2);
  tile.setMoving(sibling);
  t.true(!tile.isMoving());
});

test('cannot setMoving when sibling is a regular tile and tile is a blue tile', t => {
  let tile = createTile(3);
  let sibling = createTile(1);
  tile.setMoving(sibling);
  t.true(!tile.isMoving());
});

test('cannot setMoving when sibling is a regular tile and tile is a regular tile with a different value', t => {
  let tile = createTile(3);
  let sibling = createTile(6);
  tile.setMoving(sibling);
  t.true(!tile.isMoving());
});

test('can setMoving when sibling is a blue tile and tile is a red tile', t => {
  let tile = createTile(2);
  let sibling = createTile(1);
  tile.setMoving(sibling);
  t.true(tile.isMoving());
});

test('can setMoving when both tiles are the same value and neither a red or blue tile', t => {
  let tile = createTile(3);
  let sibling = createTile(3);
  tile.setMoving(sibling);
  t.true(tile.isMoving());
});

test('updates the tile with the correct value', t => {
  let tile = createTile(3);
  let sibling = createTile(3);
  tile.setMoving(sibling);
  t.true(tile.isMoving());
  tile.update();
  t.true(tile.getNumber() === 6);
  t.true(!tile.isMoving());
});

test('updates red tile with the correct value', t => {
  let tile = createTile(2);
  let sibling = createTile(1);
  tile.setMoving(sibling);
  t.true(tile.isMoving());
  tile.update();
  t.true(tile.getNumber() === 3);
  t.true(!tile.isMoving());
});

test('updates blue tile with the correct value', t => {
  let tile = createTile(1);
  let sibling = createTile(2);
  tile.setMoving(sibling);
  t.true(tile.isMoving());
  tile.update();
  t.true(tile.getNumber() === 3);
  t.true(!tile.isMoving());
});
