import { Dispatch } from "react";

export interface State {
  count: number;
  links: string[];
}

export interface Action {
  type: "add" | "remove";
  value: { link: string };
}

export interface Value {
  state: State;
  dispatch: Dispatch<Action>;
}
