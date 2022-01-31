import * as handlers from "./Handlers";
import { State, Action, Link } from "./types";

export * from "./types";

export const initialState = { links: [] } as State;

export function ConverterReducer(state: State, action: Action) {
  return handlers[action.target][action.type]?.(state, action) ?? state;
}
