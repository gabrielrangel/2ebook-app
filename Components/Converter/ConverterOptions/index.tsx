import { Stack } from "@mui/material";
import AddUrlModal from "Components/Converter/AddUrlModal";
import React from "react";

export const ConverterOptions = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <AddUrlModal />
    </Stack>
  );
};
