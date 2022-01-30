import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Button,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useCallback } from "react";
import { useConverterContext } from "Services/Context/Converter";
import ClearAllIcon from "@mui/icons-material/ClearAll";

export const ContentStep = () => {
  const { state, dispatch } = useConverterContext();

  const addRowHandler = useCallback(() => {
    dispatch({ type: "add" });
  }, [dispatch]);

  const editRowHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
      dispatch({ type: "edit", index, url: e.target.value });
    },
    [dispatch]
  );

  const removeRowHandler = useCallback(
    (index: number) => {
      dispatch({ type: "remove", index });
    },
    [dispatch]
  );

  const removeAllHandler = useCallback(() => {
    dispatch({ type: "removeAll" });
  }, [dispatch]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant="h6" component={"h3"}>
              URL
            </Typography>
          </TableCell>
          <TableCell width={"1%"}>
            <Typography variant="h6" component={"h3"}>
              STATUS
            </Typography>
          </TableCell>
          <TableCell width={"1%"}>
            <IconButton color="error" onClick={removeAllHandler}>
              <ClearAllIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {state.map(({ url }, i) => (
          <TableRow key={i}>
            <TableCell>
              <TextField
                fullWidth
                value={url}
                onChange={(e) => editRowHandler(e, i)}
              />
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              {url && (
                <IconButton color="error" onClick={() => removeRowHandler(i)}>
                  <ClearIcon />
                </IconButton>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={100}>
            <Stack direction={"row"}>
              <Button startIcon={<AddIcon />} onClick={addRowHandler}>
                Add row
              </Button>
            </Stack>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ContentStep;