export enum ActionKind {
  NextStep = "NEXT",
  PreviousStep = "PREV",
}

export interface StepReducerAction {
  type: ActionKind;
}

export interface StepReducerState {
  readonly curStep: number;
  readonly lastStep: number;
  readonly firstStep: number;
}
