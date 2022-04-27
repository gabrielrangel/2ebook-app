import React from "react";
import { Button, Stack, Typography, Divider } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { ConverterOptions } from "../ConverterOptions";
import { useConverterContext } from "Hooks/Converter/Context";
import { ActionKind } from "Services/App/Converter/StepReducer";

export const ConverterHeader = () => {
  const { stepsReducer } = useConverterContext();
  const [stepsReducerState, stepReducerDispatch] = stepsReducer;
  const { curStep, firstStep, lastStep } = stepsReducerState;

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
            disabled={curStep === firstStep}
            variant="contained"
            size="large"
            startIcon={<NavigateBeforeIcon />}
            onClick={() =>
              stepReducerDispatch({ type: ActionKind.PreviousStep })
            }
          >
            Back
          </Button>
          <ConverterOptions />
        </Stack>
        <Stack direction={"row"} flex={0} spacing={2}>
          <Button
            disabled={curStep === lastStep}
            variant="contained"
            size="large"
            endIcon={<NavigateNextIcon />}
            onClick={() => stepReducerDispatch({ type: ActionKind.NextStep })}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ConverterHeader;
