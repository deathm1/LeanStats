import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#2196f3",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    textAlign: "center",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Lean Stats
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Unlock Your Health Potential with Lean Stats
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Track Your Progress, Achieve Your Goals
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4} justify="center">
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    BMI Calculator
                  </Typography>
                  <Typography>
                    Calculate your Body Mass Index easily with our BMI
                    calculator.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Weight Tracker
                  </Typography>
                  <Typography>
                    Keep track of your weight journey and monitor your progress
                    over time.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Calorie Counter
                  </Typography>
                  <Typography>
                    Monitor your calorie intake and stay on track with your
                    dietary goals.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lifestyle Analysis
                  </Typography>
                  <Typography>
                    Analyze your lifestyle habits and make informed decisions
                    for a healthier life.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
