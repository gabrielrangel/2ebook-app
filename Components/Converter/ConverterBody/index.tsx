import React from "react";
import ConverterConfig from "config/converter";
import { useConverterContext } from "Hooks/Converter/Context";

const { links } = ConverterConfig;

export const ConverterBody = () => {
  const { stepsReducer } = useConverterContext();
  const [{ curStep }] = stepsReducer;
  const CurrentLink = links[curStep];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <CurrentLink />
    </div>
  );
};

export default ConverterBody;
