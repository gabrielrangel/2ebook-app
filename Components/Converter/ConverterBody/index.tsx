import React, { useEffect } from "react";
import { ConverterMetadataForm } from "./ConverterMetadataForm";
import ConverterUrlInputStep from "./ConverterUrlInputStep";

export const ConverterSteps = [
  () => <ConverterUrlInputStep />,
  () => <ConverterMetadataForm />,
];

export const ConverterBody = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>{ConverterSteps[0]()}</div>
  );
};

export default ConverterBody;
