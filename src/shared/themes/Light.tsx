import { createTheme } from "@mui/material";
import { amber, grey, purple } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: purple.A400,
      dark: purple.A700,
    },
    secondary: {
      main: amber[500],
      dark: amber.A700,
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