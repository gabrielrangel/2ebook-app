import { State, Action } from "../../types";

export function add(state: State, { link }: Action) {
  const { links } = state;
  return { ...state, links: [...links, link] };
}

export default add;
