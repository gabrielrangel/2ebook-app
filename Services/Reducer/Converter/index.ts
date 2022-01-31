import linkReducer from "./LinkReducer";
import stepReducer from "./StepReducer";
import { State, Action } from "./types";

export * from "./types";

export const initialState = { links: [], step: 0 } as State;

export function ConverterReducer(state: State, action: Action) {
  switch (action.target) {
    case "link":
      return linkReducer(state, action);
    case "step":
      return stepReducer(state, action);
    default:
      return { ...state };
  }
}
