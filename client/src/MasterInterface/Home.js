import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";

// Function to generate random image URLs related to health and fitness
const generateRandomHealthImageUrl = () => {
  const categories = ["health", "wellness", "fitness", "exercise", "nutrition"];
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const randomId = Math.floor(Math.random() * 1000);
  return `https://source.unsplash.com/300x200/?${randomCategory}&${randomId}`;
};

const features = [
  {
    title: "BMI Calculator",
    description:
      "Calculate your Body Mass Index (BMI) to assess your weight status.",
    icon: <FormatListNumberedIcon />,
  },
  {
    title: "Lean Mass & Fat Mass",
    description:
      "Track your lean mass and fat mass to monitor your body composition.",
    icon: <FitnessCenterIcon />,
  },
  {
    title: "Calorie Tracker",
    description:
      "Keep track of your daily calorie intake to maintain a healthy diet.",
    icon: <RestaurantIcon />,
  },
  {
    title: "Fitness Lifestyle",
    description:
      "Get tips and advice on adopting a fit lifestyle for better health.",
    icon: <LocalActivityIcon />,
  },
];

const LandingPage = () => {
  return (
    <div>
      {/* Hero section */}
      <Container maxWidth="lg" sx={{ textAlign: "center", marginTop: "3rem" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Lean Stats
        </Typography>
        <Typography variant="h5" paragraph>
          Your ultimate destination for precise health metrics and insights.
        </Typography>
        <Typography variant="subtitle1" paragraph>
          At LeanStatsLab, we empower you to take control of your health journey
          with accurate data tracking. Monitor vital statistics like BMI, body
          fat percentage, and more, all in one place.
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Whether you're looking to lose weight, build muscle, or improve your
          overall well-being, LeanStatsLab provides the tools and insights you
          need to succeed.
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Container>

      {/* Product section */}
      <Container maxWidth="lg" sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={generateRandomHealthImageUrl()}
                  alt="Product 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Fitness Tracker
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Track your daily steps, calories burned, and active minutes
                    with our advanced fitness tracker. Stay motivated and
                    achieve your fitness goals!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
