import {
  Container,
  Typography,
  Slider,
  FormControl,
  Select,
  MenuItem,
  Divider,
  Switch,
} from "@mui/material";

const SiteAppearancePage = (props) => {
  const handleFontSizeChange = (event, newValue) => {
    props.setSiteAppearance((prevState) => ({
      ...prevState,
      defaultFontSize: newValue,
    }));
    localStorage.setItem("defaultFontSize", newValue);
  };

  const handleFontFamilyChange = (event) => {
    props.setSiteAppearance((prevState) => ({
      ...prevState,
      defaultFont: event.target.value,
    }));
    localStorage.setItem("defaultFont", event.target.value);
  };

  const handleThemeToggle = () => {
    props.setSiteAppearance((prevState) => ({
      ...prevState,
      defaultTheme: !props.siteAppearance.defaultTheme,
    }));
    localStorage.setItem(
      "isDarkThemeEnabled?",
      !props.siteAppearance.defaultTheme
    );
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "3rem" }}>
      <Typography variant="h4" gutterBottom>
        Site Appearance
      </Typography>
      <Divider style={{ marginBottom: "2rem" }} />
      <div style={{ marginBottom: "2rem" }}>
        <Typography variant="h6" gutterBottom>
          Font Size
        </Typography>
        <Slider
          value={props.siteAppearance.defaultFontSize}
          onChange={handleFontSizeChange}
          aria-labelledby="font-size-slider"
          min={10}
          max={24}
          step={1}
          valueLabelDisplay="auto"
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <Typography variant="h6" gutterBottom>
          Font Family
        </Typography>
        <FormControl fullWidth>
          <Select
            labelId="font-family-select-label"
            id="font-family-select"
            value={props.siteAppearance.defaultFont}
            onChange={handleFontFamilyChange}
          >
            {props.siteAppearance.fontOptions.map((font, i) => {
              return (
                <MenuItem key={i} value={font}>
                  {font}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <Typography variant="h6" gutterBottom>
          Change Theme
        </Typography>
        <Switch
          checked={props.siteAppearance.defaultTheme}
          onChange={handleThemeToggle}
        />
      </div>
    </Container>
  );
};

export default SiteAppearancePage;
