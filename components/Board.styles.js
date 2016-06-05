'use strict';

const styles = {
  'board': {
    fontFamily: 'Helvetica Neue',
    borderRadius: '10px',
    backgroundColor: '#d0e6df',
    padding: '12px 16px',
    borderSpacing: '10px 20px'
  },
  'tile': {
    height: '80px',
    width: '60px',
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#b6d9d9',
    boxShadow: '0 8px #b6d9d9'
  },
  'tile__face': {
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 8px #fc6',
    display: 'block',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    lineHeight: '80px',
    top: '0',
    left: '0',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  'tile__face--empty': {
    display: 'none'
  },
  'tile__face--red': {
    backgroundColor: '#ff6680',
    boxShadow: '0 8px #ff002b',
    color: '#fff'
  },
  'tile__face--blue': {
    backgroundColor: '#6cf',
    boxShadow: '0 8px #0af',
    color: '#fff'
  }
};

const getTileType = (tile) => {
  if (tile.isEmpty()) { return 'tile__face--empty'; }
  if (tile.isBlueTile()) { return 'tile__face--blue'; }
  if (tile.isRedTile()) { return 'tile__face--red'; }
};

module.exports = {
  getStyles: () => styles,
  getTileType
};
