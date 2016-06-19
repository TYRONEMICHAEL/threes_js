'use strict';

const React = require('react');
const getTileCSS = require('../threes/get-tile-css');

const getCSS = (tile, direction) => {
  const css = getTileCSS({
      isBlueTile: tile.isBlueTile(),
      isRedTile: tile.isRedTile(),
      isEmpty: tile.isEmpty(),
      isNew: tile.isNew(),
      isMoving: tile.isMoving()
    }, direction);

   return css.join(' ');
};

const Board = React.createClass({
  render: function () {
    const direction = this.props.direction;
    const rows = this.props.rows
      .map((row, rowIndex) =>
        <tr className='row' key={[rowIndex]}>
          {row.map((tile, tileIndex) =>
            <td className={ getCSS(tile, direction) } key={[rowIndex, tileIndex]}>
              <span className='tile__face'>
                {tile.getNumber()}
              </span>
            </td>
          )}
        </tr>
      );

    return (
      <table className='board'>
        <tbody>
          {rows}
        </tbody>
        <tfoot>
          <tr className='row'>
            <h4 className="next-tile-title">next</h4>
            <td className={ getCSS(this.props.nextTile) }>
              <span className='tile__face'></span>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
});

module.exports = Board;
