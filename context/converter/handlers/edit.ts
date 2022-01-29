import { State, Action } from "../types";

export function edit(state: State, { value }: Action) {
  const links = [...state.links];
  const { index, link } = value;

  if (link && index !== undefined && links[index] !== undefined) {
    links[index] = link;
    return { ...state, links };
  }
}
export default edit;
