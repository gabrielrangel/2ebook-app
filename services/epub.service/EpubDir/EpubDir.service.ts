import { mkdirSync, existsSync, writeFileSync, createWriteStream } from "fs";
import { join, dirname, resolve } from "path";
import { v4 as uuid } from "uuid";
import { ncp } from "ncp";

const EPUB_TEMPLATE_DIR =
  process.env.EPUB_TEMPLATE_DIR || resolve(__dirname, "../../../template/epub");

export class EpubDir {
  protected readonly id: string;
  protected readonly path: string;
  protected loadPromise: Promise<void>;

  constructor(dir: string) {
    this.id = uuid();
    this.path = join(dir, this.id);
    this.mkSubDirIfNotExists(this.path);
    this.loadPromise = new Promise<void>((resolve, reject) =>
      ncp(EPUB_TEMPLATE_DIR, this.path, (error) => (error ? reject(error) : resolve()))
    );
  }

  ready = () =>
    new Promise<void>((resolve, reject) => {
      this.loadPromise.catch((reason) => reject(reason)).finally(() => resolve());
    }).catch((reason) => {
      throw new Error(reason);
    });

  mkSubDirIfNotExists = (dir: string) => {
    existsSync(dirname(dir)) || this.mkSubDirIfNotExists(dirname(dir));
    existsSync(dir) || mkdirSync(dir);
    return dir;
  };

  saveFile = (relativePath: string, fileName: string, content: string) => {
    const path = this.mkSubDirIfNotExists(resolve(this.path, relativePath));
    writeFileSync(join(path, fileName), content);
    return join(relativePath, fileName);
  };

  writeStream = async (relativePath: string, filename: string, source: any) => {
    const path = this.mkSubDirIfNotExists(resolve(this.path, relativePath));

    return new Promise<string>((resolve, reject) => {
      source
        .pipe(createWriteStream(join(path, filename)))
        .on("error", reject)
        .once("close", () => resolve(join(relativePath, filename)));
    });
  };
}

export default EpubDir;
