import { Reducer } from "react";

export interface Link {
  url?: string;
}

export type LinkListStateInterface = Link[];

export interface LinkListActionInterface {
  target: "link" | "step";
  type: "add" | "remove" | "edit" | "removeAll" | "set";
  index?: number;
  link?: Link;
}

export interface LinkListReducerInterface
  extends Reducer<LinkListStateInterface, LinkListActionInterface> {}
