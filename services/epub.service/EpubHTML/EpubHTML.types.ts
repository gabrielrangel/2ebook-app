export interface IReadable {
  title: string;
  byline: string;
  dir: string;
  content: string;
  textContent: string;
  length: number;
  excerpt: string;
  siteName: string;
}

export interface IChild {
  parentSelector: string;
}

export interface EpubHTMLCreateOptions {
  sourceType: "url" | "string";
  url: string;
  content?: string;
}
