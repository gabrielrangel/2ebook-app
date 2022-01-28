import type { NextApiRequest, NextApiResponse } from "next";
import http from "http";
import { Epub } from "../../../services/epub.service/index";
import { resolve } from "path";

const CACHE_DIR = process.env.CACHE_DIR ?? resolve(__dirname, "../../../.npm/cache");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { links } = req.body as { links: string[] };
  const success: string[] = [];
  const error: string[] = [];

  if (links === undefined) {
    res.status(400).json({ error: http.STATUS_CODES[400] });
    return;
  }

  if (CACHE_DIR === undefined) {
    res.status(500);
    res.json({ error: http.STATUS_CODES[500] });
    console.error("Environment variable is undefined: CACHE_DIR");
    return;
  }

  const builder = new Epub(CACHE_DIR);

  const promises = links.map((url) =>
    builder.addHtmlFile({ sourceType: "url", url }).then(
      (_) => success.push(url),
      (reason) => {
        error.push(url);
        console.error(reason);
      }
    )
  );

  await Promise.all(promises);
  await builder.buildEpub();

  res.status(200).json({ data: { success, error } });
}
