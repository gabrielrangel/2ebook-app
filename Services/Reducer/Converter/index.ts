import * as handlers from "./Handlers";
import { State, Action } from "./types";

export * from "./types";

export const initialState: State = { count: 1, links: [""] };

export function ConverterReducer(state: State, action: Action) {
  return handlers[action.type]?.(state, action) ?? state;
}
