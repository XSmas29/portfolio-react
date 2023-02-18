import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
const themeConfig = createTheme({
  palette: {
    primary: {
      light: "#6155b6",
      main: "#3A2BA4",
      dark: "#281e72",
    },
    secondary: {
      light: "#a2a2a2",
      main: "#8B8B8B",
      dark: "#616161",
    },
    error: {
      main: red["600"],
    },
  }
});

export default themeConfig;