export async function getBoard(boardId) {
  const response = await fetch(
    "api/fetch?" +
      new URLSearchParams({
        boardId: boardId,
      })
  );

  const result = await response.json();
  return result.board;
}

export async function postBoard(board) {
  const res = await fetch("/api/share", {
    method: "POST",
    body: JSON.stringify(board),
  });
  const response = await res.json();

  return response.key;
}
