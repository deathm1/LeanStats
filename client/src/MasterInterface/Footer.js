import React from "react";
import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <footer
      style={{
        marginTop: "auto",
        textAlign: "center",
        paddingBottom: "20px",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Lean Stats. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Designed with ❤️ by Your Name
      </Typography>
    </footer>
  );
};

export default HomePage;
