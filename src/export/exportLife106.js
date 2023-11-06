const header = "#Life 1.06";

function exportToLife106(board) {
  let result = "";
  result = header + "\n";

  for (let positionY = 0; positionY < board.length; positionY++)
    for (let positionX = 0; positionX < board[positionY].length; positionX++) {
      if (!board[positionY][positionX]) continue;
      const line = `${positionX} ${positionY}\n`;
      result += line;
    }

  return result;
}

export { exportToLife106 };
