import React, { useEffect } from "react";
import { useConverterContext } from "Services/Context/Converter";
import { ConverterMetadataForm } from "./ConverterMetadataForm";
import ConverterUrlInputStep from "./ConverterUrlInputStep";

export const ConverterSteps = [
  () => <ConverterUrlInputStep />,
  () => <ConverterMetadataForm />,
];

export const ConverterBody = () => {
  const { state } = useConverterContext();

  return (
    <div style={{ height: 400, width: "100%" }}>
      {ConverterSteps[state.step ?? 0]()}
    </div>
  );
};

export default ConverterBody;
