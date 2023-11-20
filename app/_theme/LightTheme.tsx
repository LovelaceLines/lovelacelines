import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { commonTheme } from './ExtendsTheme';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    ...commonTheme,
    background: {
      paper: grey[50],
      default: grey[100],
    },
    text: {
      primary: grey[800],
      secondary: grey[50],
      disabled: grey[400],
    }
  }
});