import { LinearProgress } from "@mui/material";
import React from "react";
import { ConverterSteps } from "../ConverterBody";

export const ConverterFooter = () => {
  return (
    <LinearProgress sx={{ my: "5vh" }} variant="determinate" value={100} />
  );
};

export default ConverterFooter;
