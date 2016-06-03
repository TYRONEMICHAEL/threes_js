'use strict';

module.exports = function linkTiles (tiles) {
  const getEdges = (index) => {
    return {
      isLeft: index % 4 === 0,
      isRight: (index - 3) % 4 === 0,
      isTop: (index - 4) < 0,
      isBottom: (index + 4) > tiles.length
    };
  };

  tiles.forEach((tile, index) => {
    const edges = getEdges(index);
    tile.setRightTile(edges.isRight ? null : tiles[index + 1]);
    tile.setLeftTile(edges.isLeft ? null : tiles[index - 1]);
    tile.setTopTile(edges.isTop ? null : tiles[index - 4]);
    tile.setBottomTile(edges.isBottom ? null : tiles[index + 4]);
  });

  return tiles;
};
