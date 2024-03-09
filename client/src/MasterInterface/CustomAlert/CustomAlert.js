import * as React from "react";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomAlert(props) {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [props.alertConfig.open]);
  return (
    <Collapse in={props.alertConfig.open}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              props.setAlertConfig({
                open: false,
              });
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
        severity={props.alertConfig.severity}
      >
        <AlertTitle>{props.alertConfig.title}</AlertTitle>
        {props.alertConfig.message}
      </Alert>
    </Collapse>
  );
}
