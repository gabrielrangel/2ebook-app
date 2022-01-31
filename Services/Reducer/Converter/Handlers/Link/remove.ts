import { State, Action } from "../../types";

export function remove(state: State, { index }: Action) {
  const links = state.links.filter((_, i) => i !== index);
  return { ...state, links };
}

export default remove;
