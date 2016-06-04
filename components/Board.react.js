'use strict';

var React = require('react');

var Board = React.createClass({
  render: function () {
    var rows = this.props.rows
      .map((row, rowIndex) =>
        <tr className='row' key={[rowIndex]}>
          {row.map((tile, tileIndex) =>
            <td className='tile' key={[rowIndex, tileIndex]}>
              {tile.getNumber()}
            </td>
          )}
        </tr>
      );

    return (
      <table className="threes__board">{rows}</table>
    );
  }
});

module.exports = Board;
