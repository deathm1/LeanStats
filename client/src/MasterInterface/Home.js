import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  CardActionArea,
  Stack,
} from "@mui/material";

// Function to generate random image URLs related to health and fitness
const generateRandomHealthImageUrl = () => {
  const categories = ["nutrition"];
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const randomId = Math.floor(Math.random() * 1000);
  return `https://source.unsplash.com/300x200/?${randomCategory}&${randomId}`;
};

export default function Home(props) {
  const backgroundImage = generateRandomHealthImageUrl();
  return (
    <div style={{ marginLeft: "10px", marginRight: "10px" }}>
      <div
        style={{
          minHeight: "45vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "5px",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "20px",
          textAlign: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
        }}
      >
        <Container maxWidth="md" style={{ color: "#fff", zIndex: 1 }}>
          <Container
            maxWidth="md"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <Typography variant="h5" gutterBottom>
                Track progress, monitor health stats, and more!
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                >
                  Get Started
                </Button>

                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  Login
                </Button>
              </Stack>
            </div>
          </Container>
        </Container>
      </div>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginBottom: "50px" }}
      >
        {props.features.map((feature, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card
              variant="outlined"
              onClick={() => {
                window.location = feature.nav;
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={generateRandomHealthImageUrl()}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
