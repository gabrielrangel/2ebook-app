import { StepReducerState, StepReducerAction, ActionKind } from "./types";
export * from "./types";

export function stepReducer(
  { curStep, lastStep, firstStep }: StepReducerState,
  action: StepReducerAction
) {
  switch (action.type) {
    case ActionKind.PreviousStep:
      return curStep > firstStep
        ? { curStep: curStep - 1, lastStep, firstStep }
        : { curStep, lastStep, firstStep };
    case ActionKind.NextStep:
      return curStep < lastStep
        ? { curStep: curStep + 1, lastStep, firstStep }
        : { curStep, lastStep, firstStep };
    default:
      throw new Error(`Action kind ${action.type} is not allowed.`);
  }
}
