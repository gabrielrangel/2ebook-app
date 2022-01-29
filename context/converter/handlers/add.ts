import { State, Action } from "../types";

export function add(state: State, action: Action) {
  return { ...state, count: state.count++ };
}

export default add;
