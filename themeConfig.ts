import { createTheme } from '@mui/material/styles';
import { PaletteMode, PaletteOptions } from '@mui/material';

const colors = {
  light: {
    primary: {
      light: '#7F6DFA',
      main: '#5F49F9',
      dark: '#4233AE',
    },
    secondary: {
      light: '#D3D3D3',
      main: '#C8C8C8',
      dark: '#8C8C8C',
    },
    error: {
      light: '#EF5350',
      main: '#D32F2F',
      dark: '#C62828',
    },
    warning: {
      light: '#FFAF33',
      main: '#FFA000',
      dark: '#FF8F00',
    },
    info: {
      light: '#03A9F4',
      main: '#0288D1',
      dark: '#01579B',
    },
    success: {
      light: '#4CAF50',
      main: '#2E7D32',
      dark: '#1B5E20',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F3F3F3',
    },
    text: {
      primary: '#000000',
      secondary: '#141414',
      disabled: '#3D3D3D',
    },
    action: {
      active: '#5F49F9',
      disabled: '#7F6DFAB3',
      hover: '#5B44F5',
      disabledBackground: '#5841F0',
      selected: '#4233AE',
    },
  },
  dark: {
    primary: {
      light: '#281E72',
      main: '#3A2BA4',
      dark: '#6155B6',
    },
    secondary: {
      light: '#D3D3D3',
      main: '#C8C8C8',
      dark: '#8C8C8C',
    },
    error: {
      light: '#EF5350',
      main: '#D32F2F',
      dark: '#C62828',
    },
    warning: {
      light: '#FFAF33',
      main: '#FFA000',
      dark: '#FF8F00',
    },
    info: {
      light: '#03A9F4',
      main: '#0288D1',
      dark: '#01579B',
    },
    success: {
      light: '#4CAF50',
      main: '#2E7D32',
      dark: '#1B5E20',
    },
    background: {
      default: '#FFFFFF',
      paper: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFFB3',
      disabled: '#FFFFFF80',
    },
    action: {
      active: '#3A2BA4',
      disabled: '#281E72B3',
      hover: '#34259E',
      disabledBackground: '#2F2097',
      selected: '#2B1E83',
    },
  },
};

const lightTheme: PaletteOptions = {
  primary: colors.light.primary,
  secondary: colors.light.secondary,
  error: colors.light.error,
  background: colors.light.background,
  action: colors.light.action,
  text: colors.light.text,
  info: colors.light.info,
  success: colors.light.success,
  warning: colors.light.warning,
  mode: 'light' as PaletteMode,
};
const darkTheme: PaletteOptions = {
  primary: colors.dark.primary,
  secondary: colors.dark.secondary,
  error: colors.dark.error,
  background: colors.dark.background,
  action: colors.dark.action,
  text: colors.dark.text,
  info: colors.dark.info,
  success: colors.dark.success,
  warning: colors.dark.warning,
  mode: 'dark' as PaletteMode,
};
const themeConfig = (mode: PaletteMode) => createTheme({
  palette: mode === 'dark' ? darkTheme : lightTheme,
});

export {
  themeConfig,
  colors,
};