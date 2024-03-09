import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Assuming you have an API endpoint to handle user registration
    const apiUrl = "https://example.com/api/signup";
    const data = { firstName, lastName, email, password };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // Handle successful registration, e.g., redirect to login page
      console.log("Registration successful");
    } catch (error) {
      console.error("Error:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={4}>
        <Paper variant="outlined" style={{ padding: 40 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Create an Account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              size="small"
              required
              variant="outlined"
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              required
              size="small"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              size="small"
              required
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              size="small"
              required
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Confirm Password"
              size="small"
              required
              type="password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && (
              <Typography
                variant="body2"
                color="error"
                align="center"
                style={{ marginTop: 10 }}
              >
                {error}
              </Typography>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="small"
              style={{ marginTop: 20, textTransform: "none" }}
              type="submit"
            >
              Sign Up
            </Button>
            <Typography
              variant="body2"
              align="center"
              style={{ marginTop: 20 }}
            >
              Already have an account? <Link href="/login">Login</Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
