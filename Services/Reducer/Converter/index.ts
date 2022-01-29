import * as handlers from "./Handlers";
import { State, Action } from "./types";

export * from "./types";

export function ConverterReducer(state: State, action: Action) {
  return handlers[action.type]?.(state, action) ?? state;
}
