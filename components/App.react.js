'use strict';

const React = require('react');
const boardInterface = require('../threes/board')();
const Board = require('../components/Board.react');

const animationDuration = 200;

const App = React.createClass({
  getInitialState: () => {
    return {
      rows: boardInterface.render(),
      nextTile: boardInterface.getNextTile()
    };
  },

  componentDidMount: function () {
    document.addEventListener('keydown', (e) => {
      const direction = e.keyIdentifier.toLowerCase();
      boardInterface.move(direction);
      this.setState({
        rows: boardInterface.render(),
        direction
      });

      setTimeout(() => {
        boardInterface.update(direction);
        this.setState({
          rows: boardInterface.render(),
          nextTile: boardInterface.getNextTile()
        });
      }, animationDuration);
    });
  },

  move: function (rows, direction) {
    this.setState({ rows, direction });
  },

  reset: function () {
    boardInterface.generate();
    this.setState({
      rows: boardInterface.render()
    });
  },

  render: function () {
    return (
      <div className='threes'>
        <Board rows={this.state.rows} direction={this.state.direction} nextTile={this.state.nextTile} />
        <button onClick={this.reset} className='reset-game'>new game</button>
      </div>
    );
  }
});

module.exports = App;
