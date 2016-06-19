'use strict';

const React = require('react');
const boardInterface = require('../threes/board')();
const Board = require('../components/Board.react');

const App = React.createClass({
  getInitialState: () => {
    return {
      rows: boardInterface.render()
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
          rows: boardInterface.render()
        });
      }, 300);
    });
  },

  move: function (rows, direction) {
    this.setState({ rows, direction });
  },

  render: function () {
    return (
      <div className='threes'>
        <Board rows={this.state.rows} direction={this.state.direction} />
      </div>
    );
  }
});

module.exports = App;
