import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const BodyFatCalculator = () => {
  const options = ["Male", "Female"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [output, setOutput] = useState(null);
  const handleOptionChange = (event, newOption) => {
    if (newOption !== null) {
      setSelectedOption(newOption);
    }
  };
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    unitHeight: "cm",
    weight: "",
    unitWeight: "kg",
    neck: "",
    unitNeck: "cm",
    waist: "",
    unitWaist: "cm",
    hip: "",
    unitHip: "cm",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const output = calculateBodyComposition(
      selectedOption,

      formData.height,
      formData.unitHeight,

      formData.weight,
      formData.unitWeight,

      formData.neck,
      formData.unitNeck,

      formData.waist,
      formData.unitWaist,

      formData.hip,
      formData.unitHip
    );

    setOutput(output);
  };

  const rows = [
    { ageRange: "< 20", bodyFatPercentage: "8-19% (male), 21-33% (female)" },
    { ageRange: "20-39", bodyFatPercentage: "8-19% (male), 21-33% (female)" },
    { ageRange: "40-59", bodyFatPercentage: "11-21% (male), 23-35% (female)" },
    { ageRange: "60-79", bodyFatPercentage: "13-24% (male), 24-36% (female)" },
    { ageRange: "80+", bodyFatPercentage: "13-25% (male), 25-38% (female)" },
  ];

  const renderInputFields = () => {
    switch (selectedOption) {
      case options[0]:
        return (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Age"
              variant="outlined"
              required
              size="small"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {" "}
              <TextField
                type="number"
                required
                name="height"
                fullWidth
                label="height"
                size="small"
                value={formData.height}
                onChange={handleChange}
                variant="outlined"
              />
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Unit Height</InputLabel>
                <Select
                  name="unitHeight"
                  size="small"
                  value={formData.unitHeight}
                  onChange={handleChange}
                  label="Unit Height"
                >
                  <MenuItem value="cm">cm</MenuItem>
                  <MenuItem value="in">in</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {" "}
              <TextField
                fullWidth
                type="number"
                label="Neck"
                name="neck"
                required
                size="small"
                value={formData.neck}
                onChange={handleChange}
                variant="outlined"
              />
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Unit Neck</InputLabel>
                <Select
                  size="small"
                  name="unitNeck"
                  value={formData.unitNeck}
                  onChange={handleChange}
                  label="Unit Neck"
                >
                  <MenuItem value="cm">cm</MenuItem>
                  <MenuItem value="in">in</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {" "}
              <TextField
                fullWidth
                type="number"
                label="Waist"
                name="waist"
                required
                size="small"
                value={formData.waist}
                onChange={handleChange}
                variant="outlined"
              />
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Unit Waist</InputLabel>
                <Select
                  size="small"
                  name="unitWaist"
                  value={formData.unitWaist}
                  onChange={handleChange}
                  label="Unit Waist"
                >
                  <MenuItem value="cm">cm</MenuItem>
                  <MenuItem value="in">in</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {" "}
              <TextField
                type="number"
                label="Weight"
                name="weight"
                fullWidth
                size="small"
                required
                value={formData.weight}
                onChange={handleChange}
                variant="outlined"
              />
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Unit Weight</InputLabel>
                <Select
                  size="small"
                  name="unitWeight"
                  value={formData.unitWeight}
                  onChange={handleChange}
                  label="Unit Weigh"
                >
                  <MenuItem value="kg">kg</MenuItem>
                  <MenuItem value="lbs">lbs</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Button
              size="small"
              type="submit"
              variant="contained"
              sx={{ textTransform: "none", mt: 2 }}
            >
              Calculate
            </Button>
          </form>
        );

      case options[1]:
        return (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Age"
              variant="outlined"
              required
              size="small"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {" "}
              <TextField
                type="number"
                required
                name="height"
                fullWidth
                label="height"
                size="small"
                value={formData.height}
                onChange={handleChange}
                variant="outlined"
              />
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Unit Height</InputLabel>
                <Select
                  name="unitHeight"
                  size="small"
                  value={formData.unitHeight}
                  onChange={handleChange}
                  label="Unit Height"
                >
                  <MenuItem value="cm">cm</MenuItem>
                  <MenuItem value="in">in</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {" "}
              <TextField
                fullWidth
                type="number"
                label="Neck"
                name="neck"
                required
                size="small"
                value={formData.neck}
                onChange={handleChange}
                variant="outlined"
              />
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Unit Neck</InputLabel>
                <Select
                  size="small"
                  name="unitNeck"
                  value={formData.unitNeck}
                  onChange={handleChange}
                  label="Unit Neck"
                >
                  <MenuItem value="cm">cm</MenuItem>
                  <MenuItem value="in">in</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {" "}
              <TextField
                fullWidth
                type="number"
                label="Waist"
                name="waist"
                required
                size="small"
                value={formData.waist}
                onChange={handleChange}
                variant="outlined"
              />
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Unit Waist</InputLabel>
                <Select
                  size="small"
                  name="unitWaist"
                  value={formData.unitWaist}
                  onChange={handleChange}
                  label="Unit Waist"
                >
                  <MenuItem value="cm">cm</MenuItem>
                  <MenuItem value="in">in</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {" "}
              <TextField
                type="number"
                label="Weight"
                name="weight"
                fullWidth
                size="small"
                required
                value={formData.weight}
                onChange={handleChange}
                variant="outlined"
              />
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Unit Weight</InputLabel>
                <Select
                  size="small"
                  name="unitWeight"
                  value={formData.unitWeight}
                  onChange={handleChange}
                  label="Unit Weigh"
                >
                  <MenuItem value="kg">kg</MenuItem>
                  <MenuItem value="lbs">lbs</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {" "}
              <TextField
                type="number"
                label="Hip"
                name="hip"
                fullWidth
                size="small"
                required
                value={formData.hip}
                onChange={handleChange}
                variant="outlined"
              />
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Unit Hip</InputLabel>
                <Select
                  size="small"
                  name="unitHip"
                  value={formData.unitHip}
                  onChange={handleChange}
                  label="Unit Hip"
                >
                  <MenuItem value="cm">cm</MenuItem>
                  <MenuItem value="in">in</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Button
              size="small"
              type="submit"
              variant="contained"
              sx={{ textTransform: "none", mt: 2 }}
            >
              Calculate
            </Button>
          </form>
        );

      default:
        return null;
    }
  };

  function convertToCentimeters(value, unit) {
    switch (unit) {
      case "m":
        return value * 100;
      case "cm":
        return parseFloat(value);
      case "in":
        return value * 2.54;
      default:
        console.error("Invalid unit");
        return null;
    }
  }

  function calculateBodyComposition(
    gender,
    height,
    heightUnit,
    weight,
    weightUnit,
    neck,
    neckUnit,
    waist,
    waistUnit,
    hip,
    hipUnit
  ) {
    // Convert units to metric
    const heightInMeter = convertToCentimeters(height, heightUnit);
    const weightInKg =
      weightUnit === "lbs" ? weight * 0.453592 : parseFloat(weight); // Convert lbs to kg
    const neckIncm = convertToCentimeters(neck, neckUnit);
    const waistIncm = convertToCentimeters(waist, waistUnit);
    const hipIncm = convertToCentimeters(hip, hipUnit);
    // Calculate body fat percentage
    let bodyFatPercentage;
    let fatMass;
    let leanMass;

    if (gender === "Male") {
      bodyFatPercentage =
        495 /
          (1.0324 -
            0.19077 * Math.log10(waistIncm - neckIncm) +
            0.15456 * Math.log10(heightInMeter)) -
        450;
    } else if (gender === "Female") {
      bodyFatPercentage =
        495 /
          (1.29579 -
            0.35004 * Math.log10(waistIncm + hipIncm - neckIncm) +
            0.221 * Math.log10(heightInMeter)) -
        450;
    } else {
      console.error("Invalid gender");
      return null;
    }

    // Calculate fat mass and lean mass
    fatMass = (weightInKg * bodyFatPercentage) / 100;
    leanMass = weightInKg - fatMass;

    return {
      bodyFatPercentage: bodyFatPercentage.toFixed(2),
      fatMass: fatMass.toFixed(2),
      leanMass: leanMass.toFixed(2),
    };
  }

  return (
    <Grid container spacing={2} sx={{ mt: 2, p: 2 }}>
      <Grid item xs={12} md={5}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Select Gender
        </Typography>
        <ToggleButtonGroup
          orientation="vertical"
          value={selectedOption}
          exclusive
          fullWidth
          color="primary"
          onChange={handleOptionChange}
          aria-label="account options"
        >
          {options.map((val, index) => {
            return (
              <ToggleButton
                key={index}
                value={val}
                size="small"
                sx={{ textTransform: "none" }}
              >
                {val}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>

        <TableContainer sx={{ mt: 2 }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Age Range</TableCell>
                <TableCell>Adequate Body Fat Percentage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.ageRange}</TableCell>
                  <TableCell>{row.bodyFatPercentage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Enter Values
        </Typography>
        {selectedOption && renderInputFields()}

        {output === null ? (
          <></>
        ) : (
          <Paper sx={{ p: 2, mt: 2 }} variant="outlined">
            <Typography variant="h6">Results</Typography>
            <Typography variant="body2">
              Body Fat (%): {output.bodyFatPercentage}
              <br />
              Fat Mass (kg): {output.fatMass}
              <br />
              Lean Mass (kg): {output.leanMass}
              <br />
            </Typography>
          </Paper>
        )}
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4">Body Fat Calculation Formulas</Typography>
        <Typography variant="h6" component="h3">
          For Males:
        </Typography>
        <Typography variant="body2">
          Body Fat Percentage = 86.010 x log<sub>10</sub>(Waist - Neck) - 70.041
          x log<sub>10</sub>(Height) + 36.76 Where,
          <br />
          - Waist is measured in centimeters (cm).
          <br />
          - Neck is measured in centimeters (cm).
          <br />- Height is measured in meters (m).
        </Typography>
        <Typography variant="h6" component="h3">
          For Females:
        </Typography>
        <Typography variant="body2">
          Body Fat Percentage = 163.205 x log<sub>10</sub>(Waist + Hip - Neck) -
          97.684 x log<sub>10</sub>(Height) - 78.387 Where,
          <br />
          - Waist is measured in centimeters (cm).
          <br />
          - Hip is measured in centimeters (cm).
          <br />
          - Neck is measured in centimeters (cm).
          <br />- Height is measured in meters (m).
        </Typography>

        <Typography variant="h4">The Science of Body Fat</Typography>
        <Typography>
          The scientific term for body fat is "<em>adipose tissue</em>." Adipose
          tissue serves a number of important functions. Its primary purpose is
          to store lipids from which the body creates energy. In addition, it
          secretes a number of important hormones, and provides the body with
          some cushioning as well as insulation.
        </Typography>

        <Typography variant="h6">Types of Body Fat</Typography>
        <Typography>
          Body fat includes <strong>essential body fat</strong> and{" "}
          <strong>storage body fat</strong>.
        </Typography>
        <ul>
          <li>
            <strong>Essential body fat</strong> is a base level of fat that is
            found in most parts of the body. It is necessary fat that maintains
            life and reproductive functions. The amount of essential fat differs
            between men and women, typically around 2-5% in men, and 10-13% in
            women. The healthy range of body fat is typically defined as 8-19%
            for men and 21-33% for women.
          </li>
          <li>
            <strong>Storage fat</strong> accumulates in adipose tissue, either
            as subcutaneous fat (deep under the dermis and wrapped around vital
            organs) or visceral fat (fat located inside the abdominal cavity,
            between organs). Excess storage fat can have serious negative health
            implications, leading to overweight and obesity if not addressed.
          </li>
        </ul>

        <Typography variant="h6">Effects of Body Fat</Typography>
        <Typography>
          While excess body fat can have detrimental effects on health,
          insufficient body fat can also have negative health effects. Managing
          body fat percentage below or even at the essential body fat range is
          crucial, and individuals should discuss this with a medical
          professional.
        </Typography>

        <Typography variant="h6">Factors Influencing Body Fat</Typography>
        <Typography>
          The rate at which body fat accumulates varies from person to person
          and is influenced by genetic and behavioral factors such as exercise
          and diet. Certain individuals may find it more challenging to reduce
          abdominal fat, but proper diet and exercise can help reduce stored
          fat.
        </Typography>

        <Typography variant="h6">Gender Differences and Aging</Typography>
        <Typography>
          Men and women store body fat differently, and this can change over
          time. Reduced sexual hormones after age 40 or menopause in women can
          lead to excess body fat around the stomach in men or around the
          buttocks and thighs in women.
        </Typography>

        <Typography>
          <em>Note:</em> Body weight is comprised of multiple factors, including
          body fat, muscle, bone density, and water content. Being overweight
          does not necessarily indicate excess body fat, as highly muscular
          individuals may be classified as overweight.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BodyFatCalculator;
