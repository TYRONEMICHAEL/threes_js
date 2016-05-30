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

test('sets and gets the next tile', t => {
  const tile = createTile(2);
  const nextTile = createTile(3);
  t.true(!tile.getNext());
  tile.setNext(nextTile);
  t.is(tile.getNext(), nextTile);
});

test('sets and gets the previous tile', t => {
  const tile = createTile(2);
  const prevTile = createTile(3);
  t.true(!tile.getPrev());
  tile.setPrev(prevTile);
  t.is(tile.getPrev(), prevTile);
});

test('sets and gets the top tile', t => {
  const tile = createTile(2);
  const topTile = createTile(3);
  t.true(!tile.getTop());
  tile.setTop(topTile);
  t.is(tile.getTop(), topTile);
});

test('sets and gets the bottom tile', t => {
  const tile = createTile(2);
  const bottomTile = createTile(3);
  t.true(!tile.getBottom());
  tile.setBottom(bottomTile);
  t.is(tile.getBottom(), bottomTile);
});

test('upgrades a normal tile with the correct value', t => {
  const tile = createTile(3);
  tile.update();
  t.true(tile.getNumber() === 6);
});

test('upgrades a blue tile with the correct value', t => {
  const tile = createTile(1);
  tile.update();
  t.true(tile.getNumber() === 3);
});

test('upgrades a red tile with the correct value', t => {
  const tile = createTile(2);
  tile.update();
  t.true(tile.getNumber() === 3);
});
