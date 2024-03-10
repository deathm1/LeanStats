import React from "react";
import { Typography, Grid } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";
const data = [
  { ageRange: "18-24", men: 22, women: 21 },
  { ageRange: "25-34", men: 24, women: 22 },
  { ageRange: "35-44", men: 26, women: 24 },
  { ageRange: "45-54", men: 28, women: 26 },
  { ageRange: "55-64", men: 29, women: 27 },
  { ageRange: "65-74", men: 30, women: 28 },
  { ageRange: "75+", men: 31, women: 29 },
];

const BMIChart = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          BMI Chart Across Age Ranges
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ResponsiveContainer height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ageRange">
              <Label value="Age" offset={-10} position="right" />
            </XAxis>
            <YAxis
              label={{
                value: "BMI",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <Tooltip />
            <Legend />
            <Bar dataKey="men" fill="#8884d8" name="Men" />
            <Bar dataKey="women" fill="#82ca9d" name="Women" />
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default BMIChart;
