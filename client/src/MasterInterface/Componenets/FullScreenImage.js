import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";

const FullScreenImage = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <img
          src={props.imageurl}
          alt="Image"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{ position: "absolute", right: "5px", top: "5px" }}
          >
            <CloseFullscreen />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img
            src={props.imageurl}
            alt="Full Screen"
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FullScreenImage;
