import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const CustomBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" separator=">">
      <Link component={RouterLink} to="/">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name} color="textPrimary">
            {toTitleCase(name)}
          </Typography>
        ) : (
          <Link key={name} component={RouterLink} to={routeTo}>
            {toTitleCase(name)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
