import React from "react";
import { Button, Stack, Typography, Divider } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AddUrlModal } from "../AddUrlModal";
import { ConverterOptions } from "Components/ConverterOptions";

export const ConverterHeader = () => {
  return (
    <Stack>
      <Typography my={3} flex={10} variant={"h5"} component={"h2"}>
        Convert links to epub
      </Typography>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          flex={0}
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Button
            disabled
            variant="contained"
            size="large"
            startIcon={<NavigateBeforeIcon />}
          >
            Back
          </Button>
          <ConverterOptions />
        </Stack>
        <Stack direction={"row"} flex={0} spacing={2}>
          <Button
            variant="contained"
            size="large"
            endIcon={<NavigateNextIcon />}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ConverterHeader;
