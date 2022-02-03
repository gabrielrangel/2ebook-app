import * as React from "react";
import { Stack } from "@mui/material";
import ConverterHeader from "./ConverterHeader";
import ConverterBody from "./ConverterBody";
import ConverterFooter from "./ConverterFooter";
import { ConverterContextProvider } from "Services/Context/Converter";

export default function Converter() {
  return (
    <ConverterContextProvider>
      <Stack spacing={1}>
        <ConverterHeader />
        <ConverterBody />
        <ConverterFooter />
      </Stack>
    </ConverterContextProvider>
  );
}
