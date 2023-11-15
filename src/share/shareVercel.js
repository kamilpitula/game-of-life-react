import { kv } from "@vercel/kv";
import { exportToLife106 } from "../export/exportLife106.js";
import { importLife106 } from "../import/importLife106.js";

import crypto from 'node:crypto';

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

export async function fetchBoard(uuid) {
  const boardString = await kv.get(`${keyPrefix}:${uuid}`);
  const board = importLife106(boardString);
  return board;
}
