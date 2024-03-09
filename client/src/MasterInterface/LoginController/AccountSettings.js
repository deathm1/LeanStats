import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import { Save } from "@mui/icons-material";

const AccountSettings = () => {
  const [selectedOption, setSelectedOption] = useState("Edit Profile");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // or send the data to your backend
  };

  const handleOptionChange = (event, newOption) => {
    if (newOption !== null) {
      setSelectedOption(newOption);
    }
  };
  const renderInputFields = () => {
    switch (selectedOption) {
      case "Edit Profile":
        return (
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              required
              size="small"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              sx={{ mb: 1 }}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              required
              size="small"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <Button
              startIcon={<Save />}
              size="small"
              type="submit"
              sx={{ textTransform: "none" }}
            >
              Save Changes
            </Button>
          </form>
        );
      case "Change Email":
        return (
          <>
            <TextField
              label="New Email Address"
              sx={{ mb: 1 }}
              variant="outlined"
              fullWidth
              size="small"
            />
            {/* Add more input fields as needed */}
          </>
        );
      case "Change Password":
        return (
          <>
            <TextField
              label="Current Password"
              variant="outlined"
              sx={{ mb: 1 }}
              fullWidth
              size="small"
            />
            <TextField
              label="New Password"
              variant="outlined"
              fullWidth
              sx={{ mb: 1 }}
              size="small"
            />
            {/* Add more input fields as needed */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <ToggleButtonGroup
          orientation="vertical"
          value={selectedOption}
          exclusive
          fullWidth
          color="primary"
          onChange={handleOptionChange}
          aria-label="account options"
        >
          <ToggleButton
            value="Edit Profile"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Edit Profile
          </ToggleButton>
          <ToggleButton
            value="Change Email"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Change Email
          </ToggleButton>
          <ToggleButton
            value="Change Password"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Change Password
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12} md={8}>
        {selectedOption && renderInputFields()}
      </Grid>
    </Grid>
  );
};

export default AccountSettings;
