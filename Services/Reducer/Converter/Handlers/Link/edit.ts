import { State, Action } from "../../types";

export function edit(state: State, { index, link }: Action) {
  const links = state.links.map((l, i) => (i === index ? link : l));
  return { ...state, links };
}
export default edit;
