import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Assuming you have an API endpoint to send login data
    const apiUrl = "https://example.com/api/login";
    const data = { username, password };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Handle successful login, e.g., redirect to dashboard
      console.log("Login successful");
    } catch (error) {
      console.error("Error:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "60vh" }}
    >
      <Grid item xs={10} sm={8} md={4}>
        <Paper variant="outlined" style={{ padding: 40 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Welcome Back!
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              size="small"
              margin="normal"
              required
              label="Email"
              variant="outlined"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              required
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              Login
            </Button>
            <Typography
              variant="body2"
              align="center"
              style={{ marginTop: 20 }}
            >
              Don't have an account? <Link href="/signup">Sign up</Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
