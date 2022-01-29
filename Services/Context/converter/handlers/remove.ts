import { State, Action } from "../types";

export function remove(state: State, action: Action) {
  const links = state.links.filter((_, i) => i !== action.value.index);
  return { ...state, links, count: links.length };
}

export default remove;
