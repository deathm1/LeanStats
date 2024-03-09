import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Breadcrumbs, Link, Typography, Container } from "@mui/material";

const CustomBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Container sx={{ mb: 2 }}>
      <Breadcrumbs aria-label="breadcrumb" separator=">">
        <Link component={RouterLink} to="/">
          Home
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={name} color="textPrimary">
              {name}
            </Typography>
          ) : (
            <Link key={name} component={RouterLink} to={routeTo}>
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Container>
  );
};

export default CustomBreadcrumbs;
