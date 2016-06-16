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
    document.addEventListener('keydown', (e) =>
      boardInterface.move(e.keyIdentifier.toLowerCase())
    );
    setInterval(() => {
      this.setState({
        rows: boardInterface.render()
      });
    }, 100);
  },

  render: function () {
    return (
      <div>
        <Board rows={this.state.rows} />
      </div>
    );
  }
});

module.exports = App;
