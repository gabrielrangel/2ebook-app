import { Dispatch } from "react";

export interface Link {
  url?: string;
}

export type Step = number;
export interface State {
  links: Link[];
  step?: Step;
}

export interface Value {
  state: State;
  dispatch: Dispatch<Action>;
}

export interface Action {
  target: "link" | "step";
  type: "add" | "remove" | "edit" | "removeAll" | "set";
  index?: number;
  link?: Link;
  step?: Step;
}
