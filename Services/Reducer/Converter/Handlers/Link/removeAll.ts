import { State, Action, initialState } from "../../../Converter";

export function removeAll(state: State, _: Action) {
  return { ...state, links: [...initialState.links] };
}

export default removeAll;
