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

function tick(board) {
  const newBoard = board.map((row) => row.slice());

  for (let positionY = 0; positionY < board.length; positionY++) {
    for (let positionX = 0; positionX < board[positionY].length; positionX++) {
      const isCellAlive = board[positionY][positionX];
      const aliveCells = checkAdjacentCells(board, positionX, positionY);
      const [stateChanged, newState] = getCellNewState(aliveCells, isCellAlive);
      if (stateChanged) {
        newBoard[positionY][positionX] = newState;
      }
    }
  }

  return newBoard;
}

function getCellNewState(aliveNeighboursCount, currentState) {
  let newState = false;
  if (!currentState && aliveNeighboursCount === 3) {
    newState = true;
  }
  if (
    currentState &&
    (aliveNeighboursCount === 3 || aliveNeighboursCount === 2)
  ) {
    newState = true;
  }

  const stateChanged = currentState !== newState;
  return [stateChanged, newState];
}

function checkAdjacentCells(board, positionX, positionY) {
  const rowCount = board.length;
  const columnCount = board[0].length;

  let aliveNeighboursCount = 0;
  for (let row = positionY - 1; row <= positionY + 1 && row < rowCount; row++) {
    for (
      let column = positionX - 1;
      column <= positionX + 1 && column < columnCount;
      column++
    ) {
      if (row === positionY && column === positionX) continue;
      if (row < 0 || column < 0) continue;

      const currentNeighbour = board[row][column];
      if (currentNeighbour) {
        aliveNeighboursCount++;
      }
    }
  }

  return aliveNeighboursCount;
}

export default {
  createNewBoard,
  changeCellState,
  tick,
};
