import React from "react";
import { Button, Stack, Typography, Divider } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { ConverterOptions } from "../ConverterOptions";
import { useConverterContext } from "Services/Context/Converter";
import { ConverterSteps } from "../ConverterBody";

export const ConverterHeader = () => {
  const { state, dispatch } = useConverterContext();
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
            disabled={
              !Boolean(ConverterSteps[state.step ? state.step - 1 : -1])
            }
            variant="contained"
            size="large"
            startIcon={<NavigateBeforeIcon />}
            onClick={() =>
              dispatch({
                target: "step",
                type: "set",
                step: state.step ? state.step - 1 : -1,
              })
            }
          >
            Back
          </Button>
          <ConverterOptions />
        </Stack>
        <Stack direction={"row"} flex={0} spacing={2}>
          <Button
            disabled={!Boolean(ConverterSteps[state.step ? state.step + 1 : 1])}
            variant="contained"
            size="large"
            endIcon={<NavigateNextIcon />}
            onClick={() =>
              dispatch({
                target: "step",
                type: "set",
                step: state.step ? state.step + 1 : 1,
              })
            }
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ConverterHeader;
