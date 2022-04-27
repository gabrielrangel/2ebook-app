import { StepReducerState } from "./../Services/App/Converter/StepReducer/types";
import { ConverterMetadataForm } from "Components/Converter/ConverterBody/ConverterMetadataForm";
import { ConverterUrlInputStep } from "Components/Converter/ConverterBody/ConverterUrlInputStep";
import { FunctionComponent } from "react";

interface ConverterConfig {
  links: FunctionComponent[];
  steps: StepReducerState;
}

export const config = {} as ConverterConfig;

config.links = [ConverterUrlInputStep, ConverterMetadataForm];
config.steps = { curStep: 0, lastStep: config.links.length - 1, firstStep: 0 };

export default config;
