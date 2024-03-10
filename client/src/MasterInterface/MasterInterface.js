import { useEffect, useState } from "react";
import CustomAppBar from "./CustomAppBar";
import Appearance from "./Appearance";
import SignupPage from "./LoginController/SignupPage";
import Home from "./Home";
import CustomAlert from "./CustomAlert/CustomAlert";
import Footer from "./Footer";
import Calculators from "./Calculators";
import CustomBreadcrumbs from "./CustomBreadcrumbs";
import LoginPage from "./LoginController/LoginPage";
import UserProfile from "./LoginController/UserProfile";
import PageNotFound from "./PageNotFound";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BMICalculator from "./Calculators/BMICalculator";
import BodyFatCalculator from "./Calculators/BodyFatCalculator";

export default function MasterInterface() {
  const [alertConfig, setAlertConfig] = useState({
    severity: "error",
    title: "test",
    message: "test",
    open: false,
  });
  const [siteAppearance, setSiteAppearance] = useState({
    siteName: "Healthy Mon",
    pages: [
      {
        displayName: "Home",
        url: "/",
      },
      {
        displayName: "Appearance",
        url: "/appearance",
      },
      {
        displayName: "Calculators",
        url: "/calculators",
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
    features: [
      {
        title: "Body Fat Calculator",
        description:
          "Effortlessly estimate body fat percentage with our calculator widget. Input age, gender, height, weight, and waist circumference for instant results.",
        nav: "/calculators/bodyfatcalculator",
        isCalculator: "Y",
      },

      {
        title: "BMI Calculator",
        description:
          "Calculate your Body Mass Index (BMI) to assess your weight status.",
        nav: "/calculators/bmi",
        isCalculator: "Y",
      },
      {
        title: "Lean Mass & Fat Mass",
        description:
          "Track your lean mass and fat mass to monitor your body composition.",
      },
      {
        title: "Calorie Tracker",
        description:
          "Keep track of your daily calorie intake to maintain a healthy diet.",
      },
      {
        title: "Fitness Lifestyle",
        description:
          "Get tips and advice on adopting a fit lifestyle for better health.",
      },
    ],
  });

  var lightTheme = createTheme({
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily: siteAppearance.defaultFont,
      fontSize: parseInt(siteAppearance.defaultFontSize),
    },
  });
  var darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: siteAppearance.defaultFont,
      fontSize: parseInt(siteAppearance.defaultFontSize),
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
      <Container maxWidth="lg" disableGutters>
        <CustomAppBar siteName="LeanStats" siteAppearance={siteAppearance} />

        <CustomAlert
          alertConfig={alertConfig}
          setAlertConfig={setAlertConfig}
        />

        <BrowserRouter>
          <CustomBreadcrumbs />

          <Routes>
            <Route
              exact
              path="/"
              element={<Home features={siteAppearance.features} />}
            />
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
              path="/login"
              element={
                <LoginPage
                  setSiteAppearance={setSiteAppearance}
                  siteAppearance={siteAppearance}
                />
              }
            />

            <Route
              path="/signup"
              element={
                <SignupPage
                  setSiteAppearance={setSiteAppearance}
                  siteAppearance={siteAppearance}
                />
              }
            />
            <Route
              path="/calculators"
              element={
                <Calculators
                  setSiteAppearance={setSiteAppearance}
                  siteAppearance={siteAppearance}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <UserProfile
                  setSiteAppearance={setSiteAppearance}
                  siteAppearance={siteAppearance}
                />
              }
            />

            <Route
              path="/calculators/bmi"
              element={
                <BMICalculator
                  setSiteAppearance={setSiteAppearance}
                  siteAppearance={siteAppearance}
                />
              }
            />

            <Route
              path="/calculators/bodyfatcalculator"
              element={
                <BodyFatCalculator
                  setSiteAppearance={setSiteAppearance}
                  siteAppearance={siteAppearance}
                />
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
