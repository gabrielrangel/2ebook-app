import * as React from "react";
import { Stack } from "@mui/material";
import ConverterBody from "./ConverterBody";
import ConverterHeader from "./ConverterHeader";
import ConverterFooter from "./ConverterFooter";

export default function Converter() {
  return (
    <Stack spacing={1}>
      <ConverterHeader />
      <ConverterBody />
      <ConverterFooter />
    </Stack>
  );
}
