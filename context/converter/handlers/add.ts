import { State, Action } from "../types";

export function add(state: State, action: Action) {
  const links = [...state.links];
  const count = links.push(action.value?.link ?? "");
  return { ...state, links, count };
}

export default add;
