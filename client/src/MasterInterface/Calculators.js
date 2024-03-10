import React from "react";
import {
  Typography,
  List,
  ListItemText,
  ListItemButton,
  ListItemAvatar,
  Stack,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Link } from "react-router-dom";
export default function Calculators(props) {
  return (
    <Stack spacing={2} sx={{ mt: 2 }} direction="column">
      <Typography variant="h6">All Calculators</Typography>
      <List>
        {props.siteAppearance.calculators.map((val, index) => {
          return (
            <ListItemButton key={index} component={Link} to={val.nav}>
              <ListItemAvatar>
                <Avatar>
                  <AssessmentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={val.title} secondary={val.description} />
            </ListItemButton>
          );
        })}
      </List>
    </Stack>
  );
}
