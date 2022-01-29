import { Box, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <Box my={10}>
      <header>
        <Typography align="center" variant="h1">
          2book
        </Typography>
      </header>
    </Box>
  );
};
