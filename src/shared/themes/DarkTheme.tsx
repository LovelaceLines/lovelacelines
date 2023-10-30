import { createTheme } from '@mui/material';
import { amber, grey, pink } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
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
      default: grey[800],
    },
    text: {
      primary: grey[50],
      secondary: grey[800],
    }
  }
});