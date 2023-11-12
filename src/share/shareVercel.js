import { kv } from "@vercel/kv";
import { exportToLife106 } from "../export/exportLife106";

const keyPrefix = "sharedBoard";
const expireAfterSeconds = 3600;

export async function saveBoard(board) {
  const boardString = exportToLife106(board);
  const uuid = crypto.randomUUID();
  await kv.set(`${keyPrefix}:${uuid}`, boardString, {
    ex: expireAfterSeconds,
  });
  return uuid;
}
