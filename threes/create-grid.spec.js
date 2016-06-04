'use strict';

const test = require('ava');
const createGrid = require('./create-grid');
const createTiles = require('./create-tiles');

test('renders a 4x4 board', t => {
  const rows = createGrid(createTiles());

  rows.forEach((tiles) => {
    t.true(tiles.length === 4);
  });

  t.true(rows.length === 4);
});
