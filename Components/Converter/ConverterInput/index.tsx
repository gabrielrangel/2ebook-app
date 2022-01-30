import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import React, { ChangeEvent, FunctionComponent } from "react";

interface ConverterInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export const ConverterInput: FunctionComponent<ConverterInputProps> = ({
  value,
  onChange,
  onClick,
}) => {
  return (
    <OutlinedInput
      id="outlined-adornment-password"
      type={"url"}
      value={value}
      onChange={onChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={onClick}
            edge="end"
          >
            <ClearIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
