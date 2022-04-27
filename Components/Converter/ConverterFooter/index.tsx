import { LinearProgress } from "@mui/material";
import { useConverterContext } from "Hooks/Converter/Context";
import React from "react";

export const ConverterFooter = () => {
  const { stepsReducer } = useConverterContext();
  const [stepsReducerState] = stepsReducer;
  const { curStep, lastStep } = stepsReducerState;

  return (
    <LinearProgress
      sx={{ my: "5vh" }}
      variant="determinate"
      value={(curStep / lastStep) * 100}
    />
  );
};

export default ConverterFooter;
