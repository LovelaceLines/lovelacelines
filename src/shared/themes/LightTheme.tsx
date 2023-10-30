import { createTheme } from '@mui/material';
import { amber, grey, pink } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: pink.A400,
      dark: pink[600],
      contrastText: grey[50],
    },
    secondary: {
      main: amber[500],
      dark: amber.A700,
      contrastText: grey[800],
    },
    background: {
      paper: grey[50],
      default: grey[100],
    },
    text: {
      primary: grey[800],
      secondary: grey[50],
    }
  }
});