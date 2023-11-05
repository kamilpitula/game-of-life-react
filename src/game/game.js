function createNewBoard(sizeX, sizeY) {
  return Array(sizeY).fill(Array(sizeX).fill(false));
}

function changeCellState(board, positionX, positionY) {
  const newBoard = board.map((row, y) => {
    if (y === positionY) {
      return row.map((cellValue, x) => {
        if (x === positionX) {
          return !cellValue;
        }
        return cellValue;
      });
    }

    return row.slice();
  });

  return newBoard;
}

export default {
  createNewBoard,
  changeCellState,
};
