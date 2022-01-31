import { add } from "./add";
import { remove } from "./remove";
import { edit } from "./edit";
import { removeAll } from "./removeAll";
import { Action, State } from "..";

export function linkReducer(state: State, action: Action) {
  switch (action.type) {
    case "add":
      return add(state, action);
    case "edit":
      return edit(state, action);
    case "remove":
      return remove(state, action);
    case "removeAll":
      return removeAll(state, action);
    default:
      return { ...state };
  }
}

export default linkReducer;
