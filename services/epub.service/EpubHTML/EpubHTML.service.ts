import { Readability } from "@mozilla/readability";
import axios, { AxiosRequestConfig } from "axios";
import { JSDOM } from "jsdom";
import { EpubHTMLCreateOptions, IReadable } from "./EpubHTML.types";

export class EpubHTML {
  private fromURL = async (url: string) => {
    return await axios.get(url).then(
      (response) => this.fromString(response.data, url),
      (reason) => {
        throw new Error(reason);
      }
    );
  };

  private fromString = (content: string, url: string): IReadable => {
    const jsdom = new JSDOM(content, { url });
    const reader = new Readability(jsdom.window.document);
    return reader.parse() as IReadable;
  };

  create = async ({ sourceType, url, content = "" }: EpubHTMLCreateOptions) => {
    let data: IReadable;

    switch (sourceType) {
      case "url":
        data = await this.fromURL(url);
        break;
      case "string":
        data = this.fromString(url, content);
    }

    const jsdom = new JSDOM(data?.content);

    const html = jsdom.window.document.querySelector("html");
    html?.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");

    return { jsdom, ...data };
  };

  downloadAssetsStream = async (jsdom: JSDOM) => {
    const request = { method: "get", responseType: "stream" } as AxiosRequestConfig;
    const promises = Array.from(jsdom.window.document.querySelectorAll("[src]")).map(
      async (element) => {
        request.url = element.getAttribute("src") || "";
        return await axios(request).then(
          (response) => Object({ element, response }),
          (reason) => {
            throw new Error(reason);
          }
        );
      }
    );
    const assets = await Promise.all(promises);
    return { jsdom, assets };
  };
}

export default EpubHTML;
