import { XMLBuilder as XMLBuilderInterface } from "xmlbuilder2/lib/interfaces";
import { create as XMLBuilder } from "xmlbuilder2";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { v4 as uuid } from "uuid";

import {
  NCXInterface,
  OPFInterface,
  XMLItemElement,
  XMLNavPointElement,
  XMLItemRef,
} from "./EpubXML.types";

export class EpubXML {
  private readonly ncx: NCXInterface = {} as NCXInterface;
  private readonly opf: OPFInterface = {} as OPFInterface;

  private readonly itemList: XMLItemElement[] = [];
  private readonly navPointList: XMLNavPointElement[] = [];
  private readonly itemRefList: XMLItemRef[] = [];

  private findOrCreateXMLNode = (xml: XMLBuilderInterface, nodeName: string) =>
    xml.find((n) => n.node.nodeName === nodeName) || xml.ele(nodeName);

  constructor(dir: string) {
    const dirFiles = readdirSync(dir);

    const ncxFileName = dirFiles.find((fn) => fn.match(/\.ncx/));
    if (ncxFileName === undefined) throw new Error("Cannot find ncx file.");

    this.ncx.path = join(dir, ncxFileName);
    this.ncx.root = XMLBuilder(readFileSync(this.ncx.path).toString());
    this.ncx.root = this.findOrCreateXMLNode(this.ncx.root, "ncx");
    this.ncx.navMap = this.findOrCreateXMLNode(this.ncx.root, "navMap");

    const opfFileName = dirFiles.find((fn) => fn.match(/\.opf/));
    if (opfFileName === undefined) throw new Error("Cannot find opf file.");

    this.opf.path = join(dir, opfFileName);
    this.opf.root = XMLBuilder(readFileSync(this.opf.path).toString());
    this.opf.root = this.findOrCreateXMLNode(this.opf.root, "package");
    this.opf.metadata = this.findOrCreateXMLNode(this.opf.root, "metadata");
    this.opf.manifest = this.findOrCreateXMLNode(this.opf.root, "manifest");
    this.opf.spine = this.findOrCreateXMLNode(this.opf.root, "spine");
  }

  addItem = (relativePath: string, type: string) => {
    const ext = type.match(/(?<=\/)\w+($|(?=\+\w+$))/);
    const count = this.itemList.push({} as XMLItemElement);
    const item = this.itemList[count - 1];

    item["@id"] = uuid();
    item["@href"] = join(relativePath, `${item["@id"]}.${ext?.shift() || ""}`);
    item["@id"] = Date.now().toString();
    item["@media-type"] = type;

    return item;
  };

  private persistItem = () => {
    this.itemList.forEach((item) => this.opf.manifest.ele({ item }));
    return [this.opf.path, this.opf.root.end()];
  };

  addNavPoint = (item: XMLItemElement, title: string) => {
    const count = this.navPointList.push({} as XMLNavPointElement);
    const navPoint = this.navPointList[count - 1];

    navPoint["@id"] = item["@id"];
    navPoint["@playOrder"] = String(count);
    navPoint.content = { "@src": item["@href"] };
    navPoint.navLabel = { text: title };

    return navPoint;
  };

  private persistNavPoint = () => {
    this.navPointList.forEach((navPoint) => this.ncx.navMap.ele({ navPoint }));
    return [this.ncx.path, this.ncx.root.end()];
  };

  addItemRef = (item: XMLItemElement) => {
    const count = this.itemRefList.push({} as XMLItemRef);
    const itemRef = this.itemRefList[count - 1];

    itemRef["@idref"] = item["@id"];

    return itemRef;
  };

  private persistItemRef = () => {
    this.itemRefList.forEach((itemref) => this.opf.spine.ele({ itemref }));
    return [this.opf.path, this.opf.root.end()];
  };

  persist = (): string[][] => [this.persistItem(), this.persistItemRef(), this.persistNavPoint()];
}

export default EpubXML;
