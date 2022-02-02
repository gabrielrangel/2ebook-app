import * as React from "react";
import { Stack } from "@mui/material";
import ConverterHeader from "./ConverterHeader";
import ConverterBody from "./ConverterBody";
import ConverterFooter from "./ConverterFooter";
import { LinkCollectionContextProvider } from "Services/Context/Converter/LinkCollection";

export default function Converter() {
  return (
    <LinkCollectionContextProvider>
      <Stack spacing={1}>
        <ConverterHeader />
        <ConverterBody />
        <ConverterFooter />
      </Stack>
    </LinkCollectionContextProvider>
  );
}
