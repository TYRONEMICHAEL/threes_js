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

test('sets tile\'s number to a specific value', t => {
  const tile = createTile(1);
  t.true(tile.getNumber() === 1);
  tile.setNumber(3);
  t.true(tile.getNumber() === 3);
});

test('sets tile to empty', t => {
  const tile = createTile(1);
  t.true(tile.getNumber() === 1);
  tile.setEmpty();
  t.true(tile.isEmpty());
  t.true(tile.getNumber() === 0);
});

test('sets tile to moving', t => {
  const tile = createTile(2);
  tile.setMoving();
  t.true(tile.isMoving());
});

test('stops tile from moving', t => {
  const tile = createTile(2);
  tile.setMoving(false);
  t.true(!tile.isMoving());
});

test('mark tile as a new tile then remove the new property', t => {
  const tile = createTile(1);
  tile.setNew();
  t.true(tile.isNew());
  tile.setNew(false);
  t.true(!tile.isNew());
});

test('sets and gets the right tile', t => {
  const tile = createTile(2);
  const rightTile = createTile(3);
  t.true(!tile.getRightTile());
  tile.setRightTile(rightTile);
  t.is(tile.getRightTile(), rightTile);
});

test('sets and gets the left tile', t => {
  const tile = createTile(2);
  const leftTile = createTile(3);
  t.true(!tile.getLeftTile());
  tile.setLeftTile(leftTile);
  t.is(tile.getLeftTile(), leftTile);
});

test('sets and gets the top tile', t => {
  const tile = createTile(2);
  const topTile = createTile(3);
  t.true(!tile.getTopTile());
  tile.setTopTile(topTile);
  t.is(tile.getTopTile(), topTile);
});

test('sets and gets the bottom tile', t => {
  const tile = createTile(2);
  const bottomTile = createTile(3);
  t.true(!tile.getBottomTile());
  tile.setBottomTile(bottomTile);
  t.is(tile.getBottomTile(), bottomTile);
});

test('updates a normal tile with the correct value', t => {
  const tile = createTile(3);
  tile.update();
  t.true(tile.getNumber() === 6);
});

test('updates a blue tile with the correct value', t => {
  const tile = createTile(1);
  tile.update();
  t.true(tile.getNumber() === 3);
});

test('updates a red tile with the correct value', t => {
  const tile = createTile(2);
  tile.update();
  t.true(tile.getNumber() === 3);
});
