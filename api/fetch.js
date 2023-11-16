import { fetchBoard } from "../src/share/shareVercel.js";

export default async function handler(req, res) {
  try {
    const board = await fetchBoard(req.query.boardId);
    return res.json({
      board: board,
    });
  } catch (ex) {
    console.log(ex);
    return JSON.stringify(ex);
  }
}
