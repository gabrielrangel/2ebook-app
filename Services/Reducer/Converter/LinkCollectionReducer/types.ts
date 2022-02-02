export interface Link {
  url?: string;
}

export type LinkListState = Link[];

export interface LinkListDispatchAction {
  target: "link" | "step";
  type: "add" | "remove" | "edit" | "removeAll" | "set";
  index?: number;
  link?: Link;
}
