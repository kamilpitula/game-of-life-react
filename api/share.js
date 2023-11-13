import { saveBoard } from "../src/share/shareVercel.js";

export default async function handler(req, res) {
  try {
    console.log(req.body);
    const board = JSON.parse(req.body);
    const result = await saveBoard(board);
    return res.json({
      key: result,
    });
  } catch (ex) {
    console.log(ex);
    return res.json(ex);
  }
}
