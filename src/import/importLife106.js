export function importLife106(boardString) {
  const aliveCells = [];
  const lines = boardString.split("\n");
  if (lines[0] !== "#Life 1.06") throw Error("Not supported GoL format.");

  let max = 0;

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(" ");
    if (!values[0] || !values[1]) continue;
    const x = +values[0];
    const y = +values[1];

    if (x > max) max = x;
    if (y > max) max = y;

    aliveCells.push([x, y]);
  }

  const result = [];

  for (let i = 0; i <= max; i++) {
    const column = [];
    for (let j = 0; j <= max; j++) {
        column.push({ isAlive: false, visitedBefore: false });
    }
    result.push(column);
  }

  for (let cell of aliveCells) {
    const y = cell[1];
    const x = cell[0];
    result[y][x] = { isAlive: true, visitedBefore: false };
  }

  return result;
}
