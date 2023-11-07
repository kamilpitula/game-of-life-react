function createNewBoard(sizeX, sizeY) {
  return Array(sizeY).fill(
    Array(sizeX).fill({ isAlive: false, visitedBefore: false })
  );
}

function changeCellState(board, positionX, positionY) {
  const newBoard = board.map((row, y) => {
    if (y === positionY) {
      return row.map((cell, x) => {
        if (x === positionX) {
          const visitedBefore = cell.isAlive || cell.visitedBefore;
          return { visitedBefore: visitedBefore, isAlive: !cell.isAlive };
        }
        return { ...cell };
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
      const isCellAlive = board[positionY][positionX].isAlive;
      const aliveCells = checkAdjacentCells(board, positionX, positionY);
      const [stateChanged, newState] = getCellNewState(aliveCells, isCellAlive);
      if (stateChanged) {
        const oldCell = board[positionY][positionX];
        const visitedBefore = oldCell.isAlive || oldCell.visitedBefore;
        newBoard[positionY][positionX] = {
          visitedBefore: visitedBefore,
          isAlive: newState,
        };
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

      const currentNeighbour = board[row][column].isAlive;
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
