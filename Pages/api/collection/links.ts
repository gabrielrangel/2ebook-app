import type { NextApiRequest, NextApiResponse } from "next";
import http from "http";
import linkCollection2Ebook from "controllers/linkCollection2ebook.controller";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { links } = req.body as { links: string[] };

  return links
    ? await linkCollection2Ebook(links).then(
        (data) => res.status(200).json({ data }),
        (reason) => {
          console.error(reason);
          res.status(500).json({ message: http.STATUS_CODES[500] });
        }
      )
    : res.status(400).json({ message: http.STATUS_CODES[400] });
}
