import { useEffect, useState } from "react";
import CustomAppBar from "./CustomAppBar";
import Appearance from "./Appearance";
import Home from "./Home";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Typography } from "@mui/material";

export default function MasterInterface() {
  const [siteAppearance, setSiteAppearance] = useState({
    siteName: "LeanStats",
    pages: [
      {
        displayName: "Home",
        url: "/",
      },
      {
        displayName: "Appearance",
        url: "/appearance",
      },
    ],
    settings: [
      {
        displayName: "Logout",
        url: "/logout",
      },
    ],
    defaultFont: "Monospace",
    defaultFontSize: 16,
    fontOptions: [
      "Roboto",
      "Arial",
      "Helvetica",
      "Georgia",
      "Monospace",
      "Open Sans",
    ],
    defaultTheme: false,
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily: siteAppearance.defaultFont,
      fontSize: siteAppearance.defaultFontSize,
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: siteAppearance.defaultFont,
      fontSize: siteAppearance.defaultFontSize,
    },
  });

  useEffect(() => {
    if (localStorage.getItem("isDarkThemeEnabled?") === "true") {
      setSiteAppearance((prevState) => ({
        ...prevState,
        defaultTheme: true,
      }));
    } else {
      setSiteAppearance((prevState) => ({
        ...prevState,
        defaultTheme: false,
      }));
    }

    if (localStorage.getItem("defaultFontSize") !== null) {
      setSiteAppearance((prevState) => ({
        ...prevState,
        defaultFontSize: localStorage.getItem("defaultFontSize"),
      }));
    }

    if (localStorage.getItem("defaultFont") !== null) {
      setSiteAppearance((prevState) => ({
        ...prevState,
        defaultFont: localStorage.getItem("defaultFont"),
      }));
    }
  }, []);

  return (
    <ThemeProvider theme={siteAppearance.defaultTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters>
        <CustomAppBar siteName="LeanStats" siteAppearance={siteAppearance} />

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/appearance"
              element={
                <Appearance
                  setSiteAppearance={setSiteAppearance}
                  siteAppearance={siteAppearance}
                />
              }
            />
            <Route
              path="*"
              element={
                <Container maxWidth="sm">
                  <Typography variant="h4">404 - Page Not Found</Typography>
                  <Typography variant="body1">
                    The page you are looking for does not exist.
                  </Typography>
                </Container>
              }
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
