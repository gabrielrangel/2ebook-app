import { State, Action } from "../types";

export function edit(state: State, { type, index, ...link }: Action) {
  return state.map((l, i) => (i === index ? link : l));
}
export default edit;
