import React from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

import AccountSettings from "./AccountSettings";

const UserProfile = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper
            variant="outlined"
            style={{
              padding: "20px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="User Avatar"
              src="/path/to/avatar.jpg"
              style={{ width: "150px", height: "150px", marginBottom: "20px" }}
            />
            <Typography variant="h5">John Doe</Typography>
            <Typography variant="subtitle1">john.doe@something.com</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Edit />}
              size="small"
              style={{ marginTop: "20px", textTransform: "none" }}
            >
              Change Avatar
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper
            variant="outlined"
            style={{ padding: "20px", marginBottom: "20px" }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Account Setings
            </Typography>

            <AccountSettings />
          </Paper>
          <Paper
            style={{ padding: "20px", marginBottom: "20px" }}
            variant="outlined"
          >
            <Typography variant="h6">Account Activity</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default UserProfile;
