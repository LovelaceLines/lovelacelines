import { createTheme } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { commonTheme } from './ExtendsTheme';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...commonTheme,
    background: {
      paper: grey[900],
      default: blueGrey[900],
    },
    text: {
      primary: grey[50],
      secondary: grey[800],
      disabled: grey[400],
    }
  }
});