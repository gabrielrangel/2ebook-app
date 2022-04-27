import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useConverterContext } from "Hooks/Converter/Context";

export const AddUrlModal = () => {
  const { links } = useConverterContext();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => setUrl(""), [open]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(
    (persist) => {
      const [_, dispatch] = links;
      persist && dispatch({ type: "add", target: "link", link: { url } });
      setOpen(false);
    },
    [links, url]
  );

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add new Url</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddUrlModal;
