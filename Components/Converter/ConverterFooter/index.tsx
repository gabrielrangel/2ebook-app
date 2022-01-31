import { LinearProgress } from "@mui/material";
import React from "react";
import { useConverterContext } from "Services/Context/Converter";
import { ConverterSteps } from "../ConverterBody";

export const ConverterFooter = () => {
  const { state } = useConverterContext();
  return (
    <LinearProgress
      sx={{ my: "5vh" }}
      variant="determinate"
      value={(((state.step ?? 0) + 1) / ConverterSteps.length) * 100}
    />
  );
};

export default ConverterFooter;
