import { createTheme } from '@mui/material';
import { amber, grey, purple } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple.A400,
      dark: purple.A700,
    },
    secondary: {
      main: amber[500],
      dark: amber.A700,
    },
    background: {
      paper: grey[800],
      default: grey[50],
    },
    text: {
      primary: grey[50],
      secondary: grey[100],
    }
  }
});