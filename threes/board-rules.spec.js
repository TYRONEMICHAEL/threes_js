'use strict';

const test = require('ava');
const boardRules = require('./board-rules');
const createTile = require('./create-tile');

const canMove = (tile, sibling) => {
  return boardRules.canMove({
    siblingTileIsMoving: sibling.isMoving(),
    siblingTileIsEmpty: sibling.isEmpty(),
    siblingIsBlueTile: sibling.isBlueTile(),
    siblingIsRedTile: sibling.isRedTile(),
    tileIsEmpty: tile.isEmpty(),
    tileIsBlueTile: tile.isBlueTile(),
    tileIsRedTile: tile.isRedTile(),
    tilesAreEqual: sibling.getNumber() === tile.getNumber()
  });
};

test('cannot move when tile is a blue tile and sibling is a blue tile', t => {
  const tile = createTile(1);
  const sibling = createTile(1);
  t.true(!canMove(tile, sibling));
});

test('cannot move when tile is a red tile and sibling is a red tile', t => {
  const tile = createTile(2);
  const sibling = createTile(2);
  t.true(!canMove(tile, sibling));
});

test('cannot move when tile is a regular tile and sibling is a red tile', t => {
  const tile = createTile(3);
  const sibling = createTile(2);
  t.true(!canMove(tile, sibling));
});

test('cannot move when tile is a regular tile and sibling is a blue tile', t => {
  const tile = createTile(3);
  const sibling = createTile(1);
  t.true(!canMove(tile, sibling));
});

test('cannot move when tile is a regular tile and sibling is a regular tile with a different value', t => {
  const tile = createTile(3);
  const sibling = createTile(6);
  t.true(!canMove(tile, sibling));
});

test('cannot move when both tiles are empty', t => {
  const tile = createTile(0);
  const sibling = createTile(0);
  t.true(!canMove(tile, sibling));
});

test('cannot move when tile is an empty tile and sibling is a non empty tile', t => {
  const tile = createTile(0);
  const sibling = createTile(1);
  t.true(!canMove(tile, sibling));
});

test('cannot move when tile is an empty tile and sibling is moving', t => {
  const tile = createTile(0);
  const sibling = createTile(1);
  sibling.setMoving();
  t.true(!canMove(tile, sibling));
});

test('can move when tile is a blue tile and sibling is a red tile', t => {
  const tile = createTile(1);
  const sibling = createTile(2);
  t.true(canMove(tile, sibling));
});

test('can move when tile is a red tile and sibling is a blue tile', t => {
  const tile = createTile(2);
  const sibling = createTile(1);
  t.true(canMove(tile, sibling));
});

test('can move when both tiles are the same value and neither a red or blue tile', t => {
  const tile = createTile(3);
  const sibling = createTile(3);
  t.true(canMove(tile, sibling));
});

test('can move when sibling is empty and tile is either a red or blue tile', t => {
  const tile = createTile(2);
  const sibling = createTile(0);
  t.true(canMove(tile, sibling));
});
