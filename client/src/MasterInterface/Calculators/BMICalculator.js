import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  AccordionActions,
} from "@mui/material";
import FullScreenImage from "../Componenets/FullScreenImage";
import { ExpandMore } from "@mui/icons-material";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [bmi, setBmi] = useState(null);

  const parseValue = (input) => {
    const numericalValue = parseFloat(input);
    if (isNaN(numericalValue)) return 0;
    return numericalValue;
  };

  const calculateBMI = () => {
    const heightValue = parseValue(height);
    const weightValue = parseValue(weight);

    const heightInMeters = getHeightInMeters(heightValue);
    const bmiValue = weightValue / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
  };

  const getHeightInMeters = (value) => {
    switch (heightUnit) {
      case "cm":
        return value / 100;
      case "ft":
        return value * 0.3048;
      case "in":
        return value * 0.0254;
      default:
        return value;
    }
  };

  const interpretBMI = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
  };

  const bmiinfo = [
    {
      head: "BMI Information",
      desc: "<b>Q:</b> What is BMI?<br /><b>A:</b> BMI stands for Body Mass Index. It is a measure of body fat based on height and weight.<br /><br /><b>Q:</b> How is BMI calculated?<br /><b>A:</b> BMI is calculated by dividing weight in kilograms by height in meters squared (BMI = weight / (height * height)).<br /><br /><b>Q:</b> What is a healthy BMI range?<br /><b>A:</b> A BMI between 18.5 and 24.9 is considered normal or healthy.",
    },
    {
      head: "Theory",
      desc: "The concept of BMI was developed by Adolphe Quetelet in the 19th century as a simple method to assess the level of obesity in populations. It is widely used in clinical settings and public health to categorize individuals into different weight categories.",
    },
    {
      head: "Scientific Analysis",
      desc: "Numerous studies have shown a correlation between BMI and various health outcomes, including the risk of chronic diseases such as heart disease, diabetes, and certain cancers. However, BMI has its limitations and may not accurately reflect body composition in individuals with high muscle mass or those with certain medical conditions.",
    },
    {
      head: "Medical References",
      desc: "- World Health Organization (WHO). Obesity: preventing and managing the global epidemic. Report of a WHO consultation. World Health Organ Tech Rep Ser. 2000;894:i-xii, 1-253.<br />- Centers for Disease Control and Prevention (CDC). About Adult BMI. Available online: https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html (accessed on January 10, 2024).",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid item xs={12} sm={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Paper
              style={{ padding: "20px", textAlign: "center" }}
              variant="outlined"
            >
              <Typography variant="h4" gutterBottom>
                BMI Calculator
              </Typography>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    label="Height"
                    size="small"
                    variant="outlined"
                    fullWidth
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="height-unit-label">Unit</InputLabel>
                    <Select
                      labelId="height-unit-label"
                      id="height-unit"
                      size="small"
                      value={heightUnit}
                      onChange={(e) => setHeightUnit(e.target.value)}
                      label="Unit"
                    >
                      <MenuItem value="cm">cm</MenuItem>
                      <MenuItem value="m">m</MenuItem>
                      <MenuItem value="ft">ft</MenuItem>
                      <MenuItem value="in">in</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={8}>
                  <TextField
                    label="Weight"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="weight-unit-label">Unit</InputLabel>
                    <Select
                      labelId="weight-unit-label"
                      id="weight-unit"
                      size="small"
                      value={weightUnit}
                      onChange={(e) => setWeightUnit(e.target.value)}
                      label="Unit"
                    >
                      <MenuItem value="kg">kg</MenuItem>
                      <MenuItem value="lbs">lbs</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={calculateBMI}
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Calculate BMI
              </Button>
              {bmi !== null && (
                <div>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{ marginTop: "20px" }}
                  >
                    Your BMI: {bmi.toFixed(2)}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Interpretation: {interpretBMI()}
                  </Typography>
                </div>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper
              style={{ padding: "20px", textAlign: "center" }}
              variant="outlined"
            >
              <Typography variant="h4">BMI Chart</Typography>

              <FullScreenImage
                imageurl={
                  "https://avicennaint.com/wp-content/uploads/2022/01/bmi-chart-imp.webp"
                }
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        {bmiinfo.map((val, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{ __html: val.head }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{ __html: val.desc }}
                />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default BMICalculator;
