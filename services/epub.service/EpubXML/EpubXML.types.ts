import { XMLBuilder as XMLBuilderInterface } from "xmlbuilder2/lib/interfaces";

export interface NCXInterface {
  path: string;
  root: XMLBuilderInterface;
  ncx: XMLBuilderInterface;
  navMap: XMLBuilderInterface;
}

export interface OPFInterface {
  path: string;
  root: XMLBuilderInterface;
  metadata: XMLBuilderInterface;
  manifest: XMLBuilderInterface;
  spine: XMLBuilderInterface;
}

export interface EpubXMLProps {
  ncxPath: string;
  opfPath: string;
}

export interface XMLItemElement {
  "@id": string;
  "@href": string;
  "@media-type": string;
}

export interface XMLNavPointElement {
  "@id": string;
  "@playOrder": string;
  navLabel: { text: string };
  content: { "@src": string };
}

export interface XMLItemRef {
  "@idref": string;
}
