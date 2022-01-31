import { Action } from "../types";
import { State } from "..";
import { set } from "./set";

export function stepReducer(state: State, action: Action) {
  console.log(action);
  switch (action.type) {
    case "set":
      return set(state, action);
    default:
      return { ...state };
  }
}

export default stepReducer;
