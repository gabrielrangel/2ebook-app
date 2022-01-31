import { State, Action, initialState } from "..";

export function set(state: State, { step }: Action) {
  return { ...state, step };
}

export default set;
