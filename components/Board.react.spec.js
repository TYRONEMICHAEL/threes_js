'use strict';

require('babel-register');
require('babel-polyfill');

const test = require('ava');
const _ = require('underscore');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const boardInterface = require('../threes/board')();
const Board = require('./Board.react');
const shallowRenderer = TestUtils.createRenderer();

test.beforeEach(() => {
  shallowRenderer.render(React.createElement(Board, { rows: boardInterface.render() }));
});

test('renders the component correctly', t => {
  const result = shallowRenderer.getRenderOutput();
  const grid = _.flatten(
    boardInterface.render()).map((tile) => tile.getNumber()
  );

  const renderedGrid = _.flatten(
    result.props.children.map((row) =>
      row.props.children.map((tile) => tile.props.children.props.children)
    )
  );

  t.deepEqual(grid, renderedGrid);
});
