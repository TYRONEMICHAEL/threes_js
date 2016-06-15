'use strict';

const test = require('ava');
const _ = require('underscore');
const createTile = require('./create-tile');
const generateNumber = require('./generate-number');

test('generates a random number from the deck', t => {
  const tiles = [
    createTile(3), createTile(), createTile(2), createTile(1),
    createTile(), createTile(1), createTile(2), createTile(),
    createTile(2), createTile(1), createTile(2), createTile(),
    createTile(), createTile(1), createTile(), createTile(2)
  ];

  const number = generateNumber(tiles);

  t.true(number >= 1);
  t.true(number <= 3);
});

test('generates a random number from the when we have a tile > 48', t => {
  const tiles = [
    createTile(192), createTile(), createTile(2), createTile(1),
    createTile(), createTile(1), createTile(2), createTile(),
    createTile(2), createTile(1), createTile(2), createTile(),
    createTile(), createTile(1), createTile(), createTile(2)
  ];

  const number = generateNumber(tiles, 1);

  t.true(_.contains([ 6, 12, 24 ], number));
});
