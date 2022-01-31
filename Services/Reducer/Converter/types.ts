import { Dispatch } from "react";

export interface Link {
  url?: string;
}
export interface State {
  links: Link[];
}

export interface Value {
  state: State;
  dispatch: Dispatch<Action>;
}

export interface Action {
  type: "add" | "remove" | "edit" | "removeAll";
  target: "link";
  index?: number;
  link?: Link;
}
