import { EpubDir } from "./EpubDir";
import { EpubHTML, EpubHTMLCreateOptions } from "./EpubHTML";
import { EpubXML } from "./EpubXML";
import { create as XMLBuilder } from "xmlbuilder2";

import { join, basename, dirname, relative } from "path";
import { AxiosResponse } from "axios";
import archiver from "archiver";
import { createWriteStream, rmdirSync } from "fs";

const OEBPS_DIR = process.env.EPUB_ASSETS_RELATIVE_PATH || "OEBPS";
const TEXT_DIR = process.env.EPUB_TEXT_RELATIVE_PATH || join(OEBPS_DIR, "text");

export class Epub extends EpubDir {
  private xml?: EpubXML;
  private html: EpubHTML;

  constructor(dir: string) {
    super(dir);

    this.html = new EpubHTML();

    this.loadPromise = new Promise<void>((resolve, reject) => {
      this.loadPromise
        .catch((reason) => reject(reason))
        .then((_) => (this.xml = new EpubXML(this.path)))
        .then((_) => resolve());
    });
  }

  addHtmlFile = async (options: EpubHTMLCreateOptions): Promise<void> => {
    if (this.xml === undefined) {
      await this.ready();
      return this.addHtmlFile(options);
    }

    const html = await this.html.create(options);
    const item = this.xml.addItem(TEXT_DIR, "application/xhtml+xml");

    if (!html) throw new Error("Invalid Input");

    const { jsdom, assets } = await this.html.downloadAssetsStream(html.jsdom);

    await Promise.all(
      assets.map(({ element, response }) => this.handleWriteAssetStream(element, response))
    );

    const xhtml = XMLBuilder(jsdom.serialize());

    this.saveFile(dirname(item["@href"]), basename(item["@href"]), xhtml.end());
    this.xml.addItemRef(item);
    this.xml.addNavPoint(item, html.title);
  };

  handleWriteAssetStream = async (element: Element, response: AxiosResponse): Promise<void> => {
    if (this.xml === undefined) {
      await this.ready();
      return this.handleWriteAssetStream(element, response);
    }
    const contentType = response.headers["content-type"];
    if (contentType === undefined) throw new Error("Invalid response");

    const item = this.xml.addItem(join(OEBPS_DIR, element.tagName.toLowerCase()), contentType);
    await this.writeStream(dirname(item["@href"]), basename(item["@href"]), response.data);

    element.setAttribute("src", relative(TEXT_DIR, item["@href"]));
  };

  buildEpub = () => {
    this.xml?.persist().forEach(([path, content]) => {
      this.saveFile(relative(this.path, dirname(path)), basename(path), content);
    });

    return new Promise<void>((resolve, reject) => {
      const output = createWriteStream(join(dirname(this.path), `${this.id}.epub`));
      output.on("close", () => {
        rmdirSync(this.path, { recursive: true });
        resolve();
      });
      const archive = archiver("zip", { zlib: { level: 9 } });
      archive.on("warning", (err) => console.warn(err));
      archive.on("error", (err) => reject(err));
      archive.pipe(output);
      archive.directory(this.path, false);
      archive.finalize();
    });
  };
}

export * from "./EpubDir";
export * from "./EpubXML";
export * from "./EpubHTML";
