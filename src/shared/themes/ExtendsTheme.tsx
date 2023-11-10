import { Theme, ThemeOptions, TypeText } from '@mui/material';
import { pink, amber, grey } from '@mui/material/colors';

export const commonTheme = {
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
};