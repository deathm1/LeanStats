import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LoginController from "./LoginController/LoginState";

function CustomAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    setAnchorElNav(null);

    if (typeof url === typeof "somestring") {
      window.location = url;
    }
  };

  return (
    <AppBar position="static" elevation={0} color="inherit">
      <Toolbar disableGutters>
        <HealthAndSafetyIcon
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {props.siteAppearance.siteName}
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {props.siteAppearance.pages.map((page) => (
              <MenuItem
                key={page.displayName}
                onClick={() => {
                  handleCloseNavMenu(page.url);
                }}
              >
                <Typography textAlign="center">{page.displayName}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <HealthAndSafetyIcon
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
        />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {props.siteAppearance.siteName}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {props.siteAppearance.pages.map((page) => (
            <Button
              key={page.displayName}
              href={page.url}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                textTransform: "none",
              }}
            >
              {page.displayName}
            </Button>
          ))}
        </Box>

        <LoginController siteAppearance={props.siteAppearance} />
      </Toolbar>
    </AppBar>
  );
}
export default CustomAppBar;
