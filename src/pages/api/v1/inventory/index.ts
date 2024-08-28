import { NextApiRequest, NextApiResponse } from "next";

const TEMP_FAKE_INVENTORY = { items: { wood: 4, stone: 8 }, size: 32 };

export default function test(
  request: NextApiRequest,
  response: NextApiResponse
) {
  request.method === "get";
  response.status(200).json({ ...TEMP_FAKE_INVENTORY });
}
