import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="h5" gutterBottom>
        The page you're looking for might have been removed or doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        style={{ marginTop: "20px" }}
      >
        Go Back to Home
      </Button>
    </Container>
  );
};

export default PageNotFound;
