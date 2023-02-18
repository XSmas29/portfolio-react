import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

const colors = {
  violet: '#5F49F9',
  gray: '#8B8B8B',
  red: red["600"],
  white: '#FFFFFF',
  black: '#2B2B2B',
  darkViolet: '#3A2BA4',
  darkGray: '#5D5D5D',
  lightGray: '#AAB4BE',
}

const lightTheme = {
  primary: {
    main: colors.violet,
  },
  secondary: {
    main: colors.gray,
  },
  error: {
    main: colors.red,
  },
  background: {
    default: colors.white,
  }
}
const darkTheme = {
  primary: {
    main: colors.darkViolet,
  },
  secondary: {
    main: colors.darkGray,
  },
  error: {
    main: colors.red,
  },
  background: {
    default: colors.black,
  }
}
const themeConfig = (mode: PaletteMode) => createTheme({
  palette: mode === "dark" ? darkTheme : lightTheme,
});

export {
  themeConfig,
  colors,
};