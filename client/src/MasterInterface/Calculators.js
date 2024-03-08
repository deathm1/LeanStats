import React, { useState } from "react";
import { Container, Typography, Link, Grid, Paper } from "@mui/material";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        BMI Calculator
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateBMI();
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <label>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && <Typography variant="body1">Your BMI is: {bmi}</Typography>}
    </Paper>
  );
};

const BodyFatCalculator = () => {
  // Body fat calculator logic here
  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        Body Fat Calculator
      </Typography>
      {/* Body fat calculator UI here */}
    </Paper>
  );
};

const LeanMassCalculator = () => {
  // Lean mass calculator logic here
  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        Lean Mass Calculator
      </Typography>
      {/* Lean mass calculator UI here */}
    </Paper>
  );
};

const AllCalculatorsPage = () => {
  return (
    <Container maxWidth="md" style={{ paddingTop: 20 }}>
      <Typography variant="h4" gutterBottom>
        All Calculators
      </Typography>
      <Typography variant="body1" gutterBottom>
        Choose a calculator:
        <Link href="#bmi" style={{ marginLeft: 10 }}>
          BMI
        </Link>
        <Link href="#body-fat" style={{ marginLeft: 10 }}>
          Body Fat
        </Link>
        <Link href="#lean-mass" style={{ marginLeft: 10 }}>
          Lean Mass
        </Link>
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <BmiCalculator />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BodyFatCalculator />
        </Grid>
        <Grid item xs={12}>
          <LeanMassCalculator />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllCalculatorsPage;
