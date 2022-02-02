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
import { useLinkCollectionContext } from "Services/Context/Converter/LinkCollection";

export const AddUrlModal = () => {
  const { dispatchLinks } = useLinkCollectionContext();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => setUrl(""), [open]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = (persist: boolean) => {
    persist && dispatchLinks({ type: "add", target: "link", link: { url } });
    setOpen(false);
  };

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
