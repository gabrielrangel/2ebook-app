import { State, Action } from "../types";

export function add(state: State, { type, index, ...link }: Action) {
  return [...state, link];
}

export default add;
