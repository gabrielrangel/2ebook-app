import { Dispatch } from "react";

export interface State {
  count: number;
  links: string[];
}

export interface Value {
  state: State;
  dispatch: Dispatch<Action>;
}

export interface Action {
  type: "add" | "remove" | "edit";
  value: { link?: string; index?: number };
}
