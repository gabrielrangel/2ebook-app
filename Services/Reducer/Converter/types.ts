import { Dispatch } from "react";

export interface Link {
  url?: string;
}
export type State = Link[];

export interface Value {
  state: State;
  dispatch: Dispatch<Action>;
}

export interface Action extends Link {
  type: "add" | "remove" | "edit" | "removeAll";
  index?: number;
}
