import { createClient } from "@vercel/kv";
import { exportToLife106 } from "../export/exportLife106";

const keyPrefix = "sharedBoard";
const expireAfterSeconds = 3600;

export async function saveBoard(board) {
  const kv = createClient({
    token: import.meta.env.VITE_KV_REST_API_TOKEN,
    url: import.meta.env.VITE_KV_REST_API_URL,
  });
  const boardString = exportToLife106(board);
  const uuid = crypto.randomUUID();
  await kv.set(`${keyPrefix}:${uuid}`, boardString, {
    ex: expireAfterSeconds,
  });
  return uuid;
}
