'use strict';

const _ = require('underscore');
const test = require('ava');
const createTile = require('./create-tile');
const getTileCSS = require('./get-tile-css');

const getCSS = (tile, direction) => {
  return getTileCSS({
    isBlueTile: tile.isBlueTile(),
    isRedTile: tile.isRedTile(),
    isEmpty: tile.isEmpty(),
    isNew: tile.isNew(),
    isMoving: tile.isMoving()
  }, direction);
};

test('gets the correct css when red tile', t => {
  let expectedCSS = ['tile', 'tile--red'];
  let tileCSS = getCSS(createTile(2));

   t.is(_.difference(tileCSS, expectedCSS).length, 0);
});

test('gets the correct css when blue tile', t => {
  let expectedCSS = ['tile', 'tile--blue'];
  let tileCSS = getCSS(createTile(1));

   t.is(_.difference(tileCSS, expectedCSS).length, 0);
});

test('gets the correct css when tile is moving', t => {
  let tile = createTile(1);
  let tileCSS;
  let expectedCSS = [
    'tile',
    'tile--blue',
    'tile--moving',
    'tile--moving-left'
  ];

  tile.setMoving();
  tileCSS = getCSS(tile, 'left');

   t.is(_.difference(tileCSS, expectedCSS).length, 0);
});

test('gets the correct css when tile is new', t => {
  let tile = createTile(3);
  let tileCSS;
  let expectedCSS = [
    'tile',
    'tile--new',
    'tile--new-left'
  ];

  tile.setNew();
  tileCSS = getCSS(tile, 'left');

   t.is(_.difference(tileCSS, expectedCSS).length, 0);
});

test('gets the correct css when tile is empty', t => {
  let tile = createTile(48);
  let tileCSS;
  let expectedCSS = [
    'tile',
    'tile--empty'
  ];

  tile.setEmpty();
  tileCSS = getCSS(tile);

   t.is(_.difference(tileCSS, expectedCSS).length, 0);
});
