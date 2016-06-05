'use strict';

const React = require('react');
const radium = require('radium');
const boardStyle = require('./board.styles');

const styles = boardStyle.getStyles();

const Board = React.createClass({
  render: function () {
    const rows = this.props.rows
      .map((row, rowIndex) =>
        <tr className='row' key={[rowIndex]}>
          {row.map((tile, tileIndex) =>
            <td style={styles.tile} key={[rowIndex, tileIndex]}>
              <span style={[styles.tile__face, styles[boardStyle.getTileType(tile)]]}>
                {tile.getNumber()}
              </span>
            </td>
          )}
        </tr>
      );

    return (
      <table style={[styles.board]} className="threes__board">{rows}</table>
    );
  }
});

module.exports = radium(Board);
