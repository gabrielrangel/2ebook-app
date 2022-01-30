import { State, Action, initialState } from "../../Converter";

export function removeAll(state: State, action: Action) {
  return [...initialState];
}

export default removeAll;
