import { State, Action } from "../types";

export function remove(state: State, { index }: Action) {
  return state.filter((_, i) => i !== index);
}

export default remove;
