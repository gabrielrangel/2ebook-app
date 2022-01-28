import { Epub } from "services/epub.service";

const CACHE_DIR = process.env.CACHE_DIR;

export async function linkCollection2Ebook(links: string[]) {
  if (CACHE_DIR === undefined) throw new Error("Undefined env variable: CACHE_DIR");

  const builder = new Epub(CACHE_DIR);

  const output = {
    success: [] as string[],
    error: [] as string[],
    id: builder.id,
  };

  return await links
    .reduce(async (prev, url) => {
      const { id, success, error } = await prev;

      try {
        await builder.addHtmlFile({ sourceType: "url", url });
        success.push(url);
      } catch (err) {
        error.push(url);
        console.error(err);
      }

      return { id, success, error };
    }, Promise.resolve(output))
    .finally(() => builder.buildEpub());
}

export default linkCollection2Ebook;
