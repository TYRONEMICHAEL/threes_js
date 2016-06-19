'use strict';

const _ = require('underscore');

module.exports = (tileState, direction) => {
  let tileCSS = ['tile'];

  const css = {
    isBlueTile: 'tile--blue',
    isRedTile: 'tile--red',
    isEmpty: 'tile--empty',
    isMoving: 'tile--moving',
    isNew: 'tile--new'
  };

  _.keys(tileState).forEach((key) => {
    if (tileState[key]) {
      tileCSS.push(css[key]);
    }
  });

  if (tileState.isMoving) {
    tileCSS.push(css.isMoving + '-' + direction);
  }

  if (tileState.isNew) {
    tileCSS.push(css.isNew + '-' + direction);
  }

  return tileCSS;
};
