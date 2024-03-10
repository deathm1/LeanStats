import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemAvatar,
  Stack,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Link } from "react-router-dom";
export default function Calculators(props) {
  const items = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Services", link: "/services" },
    { text: "Contact", link: "/contact" },
  ];
  return (
    <Stack spacing={2} sx={{ mt: 2 }} direction="column">
      <Typography variant="h6">All Calculators</Typography>
      <List>
        {props.siteAppearance.features.map((val, index) => {
          if (val.isCalculator === "Y") {
            return (
              <ListItemButton component={Link} to={val.nav}>
                <ListItemAvatar>
                  <Avatar>
                    <AssessmentIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={val.title} secondary={val.description} />
              </ListItemButton>
            );
          }
        })}
      </List>
    </Stack>
  );
}
