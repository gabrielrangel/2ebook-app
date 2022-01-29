import { State, Action } from "../types";

export function remove(state: State, action: Action) {
  return { ...state, count: state.count-- };
}

export default remove;
